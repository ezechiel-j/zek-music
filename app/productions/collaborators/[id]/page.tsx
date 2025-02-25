import Image from "next/image";
import Link from "next/link";
import { FaDeezer, FaInstagram, FaLinkedin, FaSpotify } from "react-icons/fa";
import { lexend } from "../../../fonts";
import styles from "./page.module.scss";
import { SiTidal, SiApplemusic, SiAmazonmusic } from "react-icons/si";

const page = () => {
  return (
    <div id={styles.collaboratorPage}>
      <div id={styles.presentation}>
        <figure>
          <Image
            src="/collaborators/pp-800x800.png"
            alt=""
            width={500}
            height={500}
            layout="responsive"
          />
        </figure>

        <div id={styles.collaboratorInfos}>
          <h2 id={styles.name} className={lexend.className}>
            Zek
          </h2>
          <p id={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            assumenda maxime vero exercitationem aspernatur velit nihil sint?
            Error facilis quae vitae laudantium possimus quis repellat culpa
            rerum dicta. Enim, ipsum? Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Ratione optio eos sequi soluta expedita porro,
            pariatur modi numquam vero sed minima nemo veniam reprehenderit
            molestiae iste doloremque non nostrum odio.
          </p>

          <ul id={styles.socials}>
            <li>
              <a href="" target="_blank">
                <FaInstagram title="Instagram" />
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                <FaLinkedin title="Linkedin" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div id={styles.content}>
        <div id={styles.collaboratorAudios}>
          <h3 className={lexend.className}>Audios</h3>
          <ul>
            <li className={styles.audio}>
              <div className={styles.audioInfo}>
                <div className={styles.audioPictureContainer}>
                  <Image
                    src="/backgrounds/clip-sevenProd.jpg"
                    alt="Zek"
                    width={100}
                    height={100}
                    layout="responsive"
                  />
                </div>
                <div className={styles.audioDescription}>
                  <h2 className={lexend.className}>Name</h2>
                  <span>Type</span>
                  <span>Artists</span>
                </div>
              </div>

              <footer>
                <ul>
                  <li>
                    <a href="" title="Spotify" target="_blank">
                      <FaSpotify />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tidal.com/browse/track/395971255"
                      title="Tidal"
                      target="_blank"
                    >
                      <SiTidal />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://deezer.page.link/8XgDQr9qnSR4UW4F7"
                      title="Deezer"
                      target="_blank"
                    >
                      <FaDeezer />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://music.apple.com/fr/album/waste-wind-gamejam-aaa-loria-2024-best-ost/1776462240?i=1776462241"
                      title="Apple Music"
                      target="_blank"
                    >
                      <SiApplemusic />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://music.amazon.fr/albums/B0DL3NNHZY?marketplaceId=A13V1IB3VIYZZH&musicTerritory=FR&ref=dm_sh_KPa5QFsLjUdpsrIVVkutDOwkb&trackAsin=B0DL3NL6DK"
                      title="Amazon Music"
                      target="_blank"
                    >
                      <SiAmazonmusic />
                    </a>
                  </li>
                </ul>
              </footer>
            </li>

            <li className={styles.audio}>
              <div className={styles.audioInfo}>
                <div className={styles.audioPictureContainer}>
                  <Image
                    src="/backgrounds/clip-sevenProd.jpg"
                    alt="Zek"
                    width={100}
                    height={100}
                    layout="responsive"
                  />
                </div>
                <div className={styles.audioDescription}>
                  <h2 className={lexend.className}>Name</h2>
                  <span>Type</span>
                  <span>Artists</span>
                </div>
              </div>

              <footer>
                <ul>
                  <li>
                    <a href="" title="Spotify" target="_blank">
                      <FaSpotify />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tidal.com/browse/track/395971255"
                      title="Tidal"
                      target="_blank"
                    >
                      <SiTidal />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://deezer.page.link/8XgDQr9qnSR4UW4F7"
                      title="Deezer"
                      target="_blank"
                    >
                      <FaDeezer />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://music.apple.com/fr/album/waste-wind-gamejam-aaa-loria-2024-best-ost/1776462240?i=1776462241"
                      title="Apple Music"
                      target="_blank"
                    >
                      <SiApplemusic />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://music.amazon.fr/albums/B0DL3NNHZY?marketplaceId=A13V1IB3VIYZZH&musicTerritory=FR&ref=dm_sh_KPa5QFsLjUdpsrIVVkutDOwkb&trackAsin=B0DL3NL6DK"
                      title="Amazon Music"
                      target="_blank"
                    >
                      <SiAmazonmusic />
                    </a>
                  </li>
                </ul>
              </footer>
            </li>

            <li className={styles.audio}>
              <div className={styles.audioInfo}>
                <div className={styles.audioPictureContainer}>
                  <Image
                    src="/backgrounds/clip-sevenProd.jpg"
                    alt="Zek"
                    width={100}
                    height={100}
                    layout="responsive"
                  />
                </div>
                <div className={styles.audioDescription}>
                  <h2 className={lexend.className}>Name</h2>
                  <span>Type</span>
                  <span>Artists</span>
                </div>
              </div>

              <footer>
                <ul>
                  <li>
                    <a href="" title="Spotify" target="_blank">
                      <FaSpotify />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tidal.com/browse/track/395971255"
                      title="Tidal"
                      target="_blank"
                    >
                      <SiTidal />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://deezer.page.link/8XgDQr9qnSR4UW4F7"
                      title="Deezer"
                      target="_blank"
                    >
                      <FaDeezer />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://music.apple.com/fr/album/waste-wind-gamejam-aaa-loria-2024-best-ost/1776462240?i=1776462241"
                      title="Apple Music"
                      target="_blank"
                    >
                      <SiApplemusic />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://music.amazon.fr/albums/B0DL3NNHZY?marketplaceId=A13V1IB3VIYZZH&musicTerritory=FR&ref=dm_sh_KPa5QFsLjUdpsrIVVkutDOwkb&trackAsin=B0DL3NL6DK"
                      title="Amazon Music"
                      target="_blank"
                    >
                      <SiAmazonmusic />
                    </a>
                  </li>
                </ul>
              </footer>
            </li>

            <li className={styles.audio}>
              <div className={styles.audioInfo}>
                <div className={styles.audioPictureContainer}>
                  <Image
                    src="/backgrounds/clip-sevenProd.jpg"
                    alt="Zek"
                    width={100}
                    height={100}
                    layout="responsive"
                  />
                </div>
                <div className={styles.audioDescription}>
                  <h2 className={lexend.className}>Name</h2>
                  <span>Type</span>
                  <span>Artists</span>
                </div>
              </div>

              <footer>
                <ul>
                  <li>
                    <a href="" title="Spotify" target="_blank">
                      <FaSpotify />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tidal.com/browse/track/395971255"
                      title="Tidal"
                      target="_blank"
                    >
                      <SiTidal />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://deezer.page.link/8XgDQr9qnSR4UW4F7"
                      title="Deezer"
                      target="_blank"
                    >
                      <FaDeezer />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://music.apple.com/fr/album/waste-wind-gamejam-aaa-loria-2024-best-ost/1776462240?i=1776462241"
                      title="Apple Music"
                      target="_blank"
                    >
                      <SiApplemusic />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://music.amazon.fr/albums/B0DL3NNHZY?marketplaceId=A13V1IB3VIYZZH&musicTerritory=FR&ref=dm_sh_KPa5QFsLjUdpsrIVVkutDOwkb&trackAsin=B0DL3NL6DK"
                      title="Amazon Music"
                      target="_blank"
                    >
                      <SiAmazonmusic />
                    </a>
                  </li>
                </ul>
              </footer>
            </li>
          </ul>
        </div>

        <div id={styles.collaboratorVideos}>
          <h3 className={lexend.className}>Videos</h3>
          <ul>
            <li>
              <a href="" className={styles.video}>
                <Image
                  src={`/thumbnails16_9/shofukan-hear.png`}
                  alt="Zek"
                  width={200}
                  height={200}
                  layout="responsive"
                />
                <h4 className={lexend.className}>Shofukan - Snarky Puppy</h4>
              </a>
            </li>

            <li>
              <a href="" className={styles.video}>
                <Image
                  src={`/thumbnails16_9/shofukan-hear.png`}
                  alt="Zek"
                  width={200}
                  height={200}
                  layout="responsive"
                />
                <h4 className={lexend.className}>Shofukan - Snarky Puppy</h4>
              </a>
            </li>

            <li>
              <a href="" className={styles.video}>
                <Image
                  src={`/thumbnails16_9/shofukan-hear.png`}
                  alt="Zek"
                  width={200}
                  height={200}
                  layout="responsive"
                />
                <h4 className={lexend.className}>Shofukan - Snarky Puppy</h4>
              </a>
            </li>

            <li>
              <a href="" className={styles.video}>
                <Image
                  src={`/thumbnails16_9/shofukan-hear.png`}
                  alt="Zek"
                  width={200}
                  height={200}
                  layout="responsive"
                />
                <h4 className={lexend.className}>Shofukan - Snarky Puppy</h4>
              </a>
            </li>

            <li>
              <a href="" className={styles.video}>
                <Image
                  src={`/thumbnails16_9/shofukan-hear.png`}
                  alt="Zek"
                  width={200}
                  height={200}
                  layout="responsive"
                />
                <h4 className={lexend.className}>Shofukan - Snarky Puppy</h4>
              </a>
            </li>
          </ul>
        </div>

        <div id={styles.collaboratorGallery}>
          <h3 className={lexend.className}>Photos</h3>
          <ul>
            <li>
              <Link href="">
                <Image
                  src="/backgrounds/clip-sevenProd.jpg"
                  alt="200"
                  width={200}
                  height={200}
                  layout="responsive"
                />
              </Link>
            </li>

            <li>
              <Link href="">
                <Image
                  src="/backgrounds/clip-sevenProd.jpg"
                  alt="200"
                  width={200}
                  height={200}
                  layout="responsive"
                />
              </Link>
            </li>

            <li>
              <Link href="">
                <Image
                  src="/backgrounds/clip-sevenProd.jpg"
                  alt="200"
                  width={200}
                  height={200}
                  layout="responsive"
                />
              </Link>
            </li>

            <li>
              <Link href="">
                <Image
                  src="/backgrounds/clip-sevenProd.jpg"
                  alt="200"
                  width={200}
                  height={200}
                  layout="responsive"
                />
              </Link>
            </li>

            <li>
              <Link href="">
                <Image
                  src="/backgrounds/clip-sevenProd.jpg"
                  alt="200"
                  width={200}
                  height={200}
                  layout="responsive"
                />
              </Link>
            </li>

            <li>
              <Link href="">
                <Image
                  src="/backgrounds/clip-sevenProd.jpg"
                  alt="200"
                  width={200}
                  height={200}
                  layout="responsive"
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default page;
