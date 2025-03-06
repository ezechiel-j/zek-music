import Image from "next/image";
import Link from "next/link";
import { FaDeezer, FaInstagram, FaLinkedin, FaSpotify } from "react-icons/fa";
import { SiAmazonmusic, SiApplemusic, SiTidal } from "react-icons/si";
import { lexend } from "../../../fonts";
import styles from "./page.module.scss";
import prisma from "@/prisma/client";
import { TbZoomInFilled } from "react-icons/tb";

interface Props {
  params: Promise<{ id: string }>;
}

const page = async (props: Props) => {
  const { id } = await props.params;

  const [collaborator, audios, videos, photos] = await Promise.all([
    prisma.collaborator.findUnique({
      where: {
        id: parseInt(id),
      },
    }),

    prisma.audio.findMany({
      where: {
        collaborators: {
          some: { collaboratorId: parseInt(id) },
        },
      },

      include: {
        AudioType: true,
      },
    }),

    prisma.video.findMany({
      where: {
        collaborators: {
          some: { collaboratorId: parseInt(id) },
        },
      },
    }),

    prisma.galleryImage.findMany({
      where: {
        collaborators: {
          some: { collaboratorId: parseInt(id) },
        },
      },
    }),
  ]);

  return (
    <div id={styles.collaboratorPage}>
      <header id={styles.presentation}>
        <figure>
          <Image
            src={`/collaborators/${collaborator!.pictureSrc}`}
            alt={collaborator!.pictureAlt}
            width={500}
            height={500}
            layout="responsive"
          />
        </figure>

        <div id={styles.collaboratorInfos}>
          <h2 id={styles.name} className={lexend.className}>
            {collaborator!.name}
          </h2>
          <p id={styles.description}>{collaborator!.description}</p>

          <ul id={styles.socials}>
            {collaborator!.link_instagram && (
              <li>
                <a href={collaborator!.link_instagram} target="_blank">
                  <FaInstagram title="Instagram" />
                </a>
              </li>
            )}

            {collaborator!.link_linkedin && (
              <li>
                <a href={collaborator!.link_linkedin} target="_blank">
                  <FaLinkedin title="Linkedin" />
                </a>
              </li>
            )}
          </ul>
        </div>
      </header>

      <div id={styles.content}>
        {audios.length > 0 && (
          <div id={styles.collaboratorAudios}>
            <h3 className={lexend.className}>Audios</h3>
            <ul>
              {audios.map((audio) => (
                <li className={styles.audio} key={audio.id}>
                  <div className={styles.audioInfo}>
                    <div className={styles.audioPictureContainer}>
                      <Image
                        src={`/audios/${audio.thumbnailSrc}`}
                        alt={audio.thumbnailAlt}
                        width={100}
                        height={100}
                        layout="responsive"
                      />
                    </div>
                    <div className={styles.audioDescription}>
                      <h2 className={lexend.className}>{audio.title}</h2>
                      <span>{audio.AudioType!.name}</span>
                      <span>{audio.artist}</span>
                    </div>
                  </div>

                  <footer>
                    <ul>
                      {audio.spotifyLink && (
                        <li>
                          <a
                            href={audio.spotifyLink}
                            title="Spotify"
                            target="_blank"
                          >
                            <FaSpotify />
                          </a>
                        </li>
                      )}
                      {audio.tidalLink && (
                        <li>
                          <a
                            href={audio.tidalLink}
                            title="Tidal"
                            target="_blank"
                          >
                            <SiTidal />
                          </a>
                        </li>
                      )}
                      {audio.deezerLink && (
                        <li>
                          <a
                            href={audio.deezerLink}
                            title="Deezer"
                            target="_blank"
                          >
                            <FaDeezer />
                          </a>
                        </li>
                      )}
                      {audio.appleMusicLink && (
                        <li>
                          <a
                            href={audio.appleMusicLink}
                            title="Apple Music"
                            target="_blank"
                          >
                            <SiApplemusic />
                          </a>
                        </li>
                      )}
                      {audio.amazonMusicLink && (
                        <li>
                          <a
                            href={audio.amazonMusicLink}
                            title="Amazon Music"
                            target="_blank"
                          >
                            <SiAmazonmusic />
                          </a>
                        </li>
                      )}
                    </ul>
                  </footer>
                </li>
              ))}
            </ul>
          </div>
        )}

        {videos.length > 0 && (
          <div id={styles.collaboratorVideos}>
            <h3 className={lexend.className}>Videos</h3>
            <ul>
              {videos.map((video) => (
                <li key={video.id}>
                  <a
                    href={video.externalLink}
                    target="_blank"
                    className={styles.video}
                  >
                    <Image
                      src={`/videos/${video.thumbnailSrc}`}
                      alt={video.thumbnailAlt}
                      width={200}
                      height={200}
                      layout="responsive"
                    />
                    <h4 className={lexend.className}>{video.title}</h4>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {photos.length > 0 && (
          <div id={styles.collaboratorGallery}>
            <h3 className={lexend.className}>Photos</h3>
            <ul>
              {photos.map((photo) => (
                <li key={photo.id}>
                  <Link
                    href={`/productions/collaborators/${collaborator!.id}/${photo.id}`}
                  >
                    <Image
                      src={`/gallery/${photo.imgSrc}`}
                      alt={photo.imgAlt}
                      width={200}
                      height={200}
                      layout="responsive"
                    />
                    <TbZoomInFilled />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
