import Link from "next/link";
import styles from "./page.module.scss";
import { lexend } from "../../fonts";
import Image from "next/image";
import Form from "next/form";
import { IoIosSearch } from "react-icons/io";
import { FaRegClock } from "react-icons/fa6";
import { GrRevert } from "react-icons/gr";

const page = () => {
  return (
    <div id={styles.newsPostPage}>
      <section id={styles.post}>
        <header>
          <div id={styles.revertContainer}>
            <Link href="/news" id={styles.revert}>
              <GrRevert />
              <span>Revenir à l&apos;ensemble des articles</span>
            </Link>
          </div>

          <Link href="" id={styles.category}>
            Category
          </Link>
          <h2 className={lexend.className}>
            Blog post title Title Title Title Title Title Title Title Title
            Title Title Title Title
          </h2>
          <div id={styles.readDateContainer}>
            <div>
              <FaRegClock />
              <span>5 min</span>
            </div>
            <div>
              <span>2 janvier 2024</span>
            </div>
          </div>
        </header>

        <figure>
          <Image
            src="/thumbnails16_9/shofukan-hear.png"
            alt="Shofukan"
            width={400}
            height={200}
            layout="reponsive"
          />
          <figcaption>Caption</figcaption>
        </figure>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
          nesciunt quae dolores voluptatem, facere, laborum eius velit odio
          dolore sunt voluptates aliquam quidem, commodi nihil nisi. Perferendis
          animi ea exercitationem. Asperiores, nesciunt voluptas eos repellendus
          adipisci vero dolores. A enim aut tempore hic soluta obcaecati, vel
          doloremque placeat perspiciatis provident illo itaque quisquam eius
          omnis, rerum reprehenderit voluptas libero voluptates. Nobis, sunt
          fugiat numquam, vero eligendi autem dignissimos magni commodi quae
          ullam accusantium iure, voluptates nostrum dolore perferendis veniam
          odit vitae nam rerum suscipit illo. Cum facere alias quae minus!
          Incidunt reiciendis laboriosam non magni nam modi, quam ex. Ducimus
          magnam est error consequuntur, obcaecati velit eaque commodi pariatur
          suscipit laudantium, eveniet non excepturi repellendus nostrum quasi
          nobis aut? Esse? Ipsum, sint totam! Cum, perspiciatis impedit nostrum
          libero dicta nihil facilis assumenda vero eius in, aut unde esse
          cupiditate natus accusamus error nemo rerum minima ex, officia earum
          architecto illo? Eaque, similique suscipit saepe culpa numquam quos
          tempore facere animi est. Magni, ducimus dolore praesentium dolorum
          quo cum quis quia, consequuntur ullam at dolores impedit neque iste
          suscipit amet doloribus? Blanditiis dignissimos possimus asperiores
          suscipit nulla, nisi veniam vel recusandae quo natus nesciunt nam et
          corrupti corporis ducimus dolore neque esse adipisci harum
          perspiciatis numquam amet sequi incidunt exercitationem! Enim.
          Laboriosam eaque excepturi sunt recusandae facilis neque quia nisi
          numquam reiciendis voluptas repellendus earum dicta magni eveniet in
          quaerat quos, error itaque officia provident harum animi doloremque
          illo dolores! Necessitatibus! Temporibus aliquid atque hic asperiores
          illo odio consequuntur vitae accusantium, ducimus libero dolor
          voluptate corrupti vero debitis blanditiis laborum minima, molestias
          sit doloribus veniam nulla voluptatibus doloremque? Corporis,
          accusantium tenetur. Cupiditate, pariatur! Modi minima, dicta
          repudiandae quo tenetur officia voluptatem odio rem blanditiis.
          Delectus perspiciatis officiis ducimus officia unde asperiores quidem
          minus cumque explicabo, at consequuntur maiores laboriosam odio autem.
          Accusamus quasi laudantium dicta libero? Tempora consequatur placeat
          maiores accusamus esse, blanditiis consequuntur maxime eligendi eaque
          ullam dolorem facere. Minima, velit fuga? Est aperiam, doloribus ad
          fuga magnam mollitia adipisci? Adipisci aliquam cum cumque, iste nisi
          amet sed accusamus animi ab consectetur! Sequi, aut hic quos sint
          officiis tenetur harum soluta exercitationem, magni veritatis quae
          natus modi nostrum, deserunt repudiandae. Illum esse numquam quae sint
          deserunt corporis perspiciatis. Vitae, animi vero, possimus
          laboriosam, rerum sint culpa accusantium velit officia nostrum cumque
          sit dolorum in necessitatibus tempore voluptate debitis ratione
          blanditiis. Numquam assumenda id laboriosam provident libero aliquam
          at sed quod distinctio in esse tempore saepe, iure dolorum magni!
          Reiciendis voluptates accusantium officiis distinctio aut dicta animi
          dolorum laboriosam alias reprehenderit. Ex quos at aperiam odit
          sapiente dolores iure minus aut, veniam, molestias rerum repellendus
          ad. Quae ratione maiores porro, alias nostrum laboriosam doloremque
          accusamus, sequi natus enim modi expedita numquam? Delectus ad
          expedita, libero, mollitia corrupti eum velit eos laboriosam quis
          perferendis, illum minus totam hic dolores fuga iure quasi quod quae
          magni nobis nesciunt vel accusamus! Voluptate, nulla laudantium?
          Perferendis dolor a doloremque laborum voluptas non quam unde eius
          odit voluptate magni libero vitae laudantium eaque, fugit laboriosam
          atque aliquam iste exercitationem illum. Sequi illo molestiae laborum
          animi recusandae! Est quod voluptatem, asperiores cupiditate
          consequatur nobis unde, velit nemo mollitia corrupti alias. Soluta
          incidunt unde similique impedit cupiditate cum, atque asperiores
          laborum velit culpa? Tempore architecto velit labore ipsa. Corporis
          illum in nemo cum beatae aspernatur voluptatum quod ipsum placeat,
          voluptate inventore mollitia quam, facere laudantium, recusandae
          asperiores eum earum perspiciatis sequi ullam ut assumenda possimus.
          Sed, tenetur incidunt. Rem quam blanditiis dignissimos cupiditate
          accusamus deleniti accusantium officia dolorem? Fugit consequatur
          quaerat at ea! Ipsum amet eius neque quibusdam. Quisquam odit facere
          fugiat aspernatur et doloribus dolorem minus! Sequi? Dignissimos eius
          totam optio facere similique earum nulla doloribus nam? Autem
          voluptates consequuntur, incidunt veritatis veniam quam doloremque
          magni nobis! Aut cum earum veritatis labore modi necessitatibus facere
          eos eligendi. Reiciendis fuga nostrum ut quis. Nostrum tempora
          exercitationem facilis inventore molestiae laudantium architecto
          quisquam odio fugiat, soluta cumque blanditiis placeat sunt pariatur
          reprehenderit officia minus dolore possimus? Impedit, eveniet dicta.
          Quam veniam et qui quo. Officiis quisquam rem sit fugit. Esse,
          expedita deleniti aut at ex quaerat nobis nihil amet rerum culpa
          ullam, modi reiciendis consequatur ea et impedit! Exercitationem!
          Numquam eaque rerum ullam qui architecto adipisci perspiciatis cum
          veniam tenetur est deserunt sit repellendus nisi nulla libero atque,
          officiis quisquam beatae eius excepturi, a, quae corporis optio!
          Numquam, minima? Placeat molestias at maxime sit, voluptates sint
          optio temporibus consequuntur eius iste incidunt voluptate nemo enim
          neque numquam. Itaque eveniet ducimus, adipisci tenetur accusantium
          rem saepe officiis atque doloribus eius. Quidem, fugiat ab quia
          deleniti accusantium blanditiis nemo in quod, harum, vero quo ducimus
          alias voluptatum omnis eligendi incidunt? Nostrum ducimus fugit
          incidunt modi veritatis rerum asperiores facilis, mollitia aspernatur?
          Culpa, iusto incidunt? Ducimus consectetur quod libero? Soluta
          voluptatibus natus qui aspernatur blanditiis officia, consequuntur
          ipsam quo itaque, nemo iusto corrupti, magni voluptate nostrum quia
          pariatur. Voluptatem natus nostrum laboriosam. Ex aut, perferendis
          obcaecati placeat exercitationem quaerat rerum ratione laudantium
          dignissimos tempora consectetur aspernatur dicta, sit eius aperiam
          aliquam quam! Libero harum possimus esse debitis quod. Atque,
          deserunt? Ipsum, nesciunt. Asperiores exercitationem omnis ab ut
          dicta. Quis tenetur deleniti reiciendis vel eaque corrupti eius
          possimus, excepturi totam quisquam impedit ab sit veritatis dolorum
          quos nulla commodi, numquam iure, quo aliquam. Molestiae quisquam
          itaque aspernatur ea odit accusamus, inventore fugit minima laborum
          magnam ipsa magni animi? Officiis libero praesentium laudantium illum
          vitae laborum amet ea earum distinctio! Inventore illo quisquam
          cumque? Hic obcaecati esse aut. Illum nisi consectetur inventore id
          repudiandae ea quo commodi asperiores sit, tempore similique.
          Similique repellendus ad voluptas dolore autem alias hic nulla
          laboriosam, commodi sint enim. Dicta nobis inventore illo sunt, qui
          adipisci nostrum distinctio maiores hic porro pariatur atque non id
          repellendus veritatis similique expedita nulla mollitia. Temporibus
          corrupti voluptatibus consequuntur ipsam amet. Natus, perspiciatis?
          Suscipit, distinctio quasi magnam molestiae amet odit. Nobis quis ex
          itaque tempore porro deserunt eos sed voluptatibus ullam eius harum,
          provident beatae fugiat placeat maiores blanditiis et iste tempora
          vel. Aperiam saepe labore, officia enim cum atque doloremque numquam,
          nisi fugiat debitis ab, quia accusantium. Non, cumque totam quos
          incidunt mollitia ullam placeat numquam fugiat, sed nam repudiandae
          nemo omnis. Inventore, cumque ex. Velit earum alias quam
          exercitationem harum possimus animi esse error impedit minus assumenda
          modi sit quod provident adipisci ullam ducimus, ut omnis rem commodi
          et ipsam. Aliquid! Quod eligendi voluptatem at hic a cum eos, rem
          sequi dolorum minus tenetur magnam repellendus porro delectus harum
          quam praesentium tempore aut repudiandae explicabo suscipit iusto illo
          labore distinctio! Voluptatum! Impedit nisi quia animi dicta,
          corrupti, facere ipsa soluta totam eos tenetur modi ea expedita dolor
          veritatis velit qui iste sequi! Qui maiores quaerat odio placeat magni
          nobis hic totam. Perspiciatis aliquam, voluptatum quidem culpa nobis
          enim et sint suscipit ex provident sequi quisquam eveniet asperiores
          consequatur tempore officiis autem! Inventore quaerat quis consequatur
          ipsa, veniam minus tenetur iste debitis? Autem id fuga facilis
          reiciendis culpa qui dignissimos, reprehenderit obcaecati sit ea quasi
          laboriosam fugit ipsa exercitationem provident nesciunt at, a quam
          pariatur vel similique. Explicabo, sequi magni! Sunt, perferendis!
          Repudiandae qui neque odit asperiores reprehenderit quisquam impedit
          ipsa. Harum ducimus blanditiis fugit consectetur sunt laborum quae
          velit, autem saepe repellendus est tenetur. Perspiciatis facere eum
          natus sapiente quo totam!
        </p>

        <footer>
          <span>by Zek</span>

          <div id={styles.revertContainer}>
            <Link href="/news" id={styles.revert}>
              <GrRevert />
              <span>Revenir à l&apos;ensemble des articles</span>
            </Link>

            <Form action="/blog/search" id={styles.searchForm}>
              <input
                type="search"
                name="title"
                placeholder="Rechercher un article"
              />
              <button type="submit">
                <IoIosSearch size={30} />
              </button>
            </Form>
          </div>
        </footer>
      </section>

      <aside id={styles.postsList}>
        <ul>
          <li>
            <Link href="/news/2">
              <span>Category</span>
              <h3 className={lexend.className}>
                Title Title Title Title Title Title Title Title
              </h3>
              <span>5 min</span>
            </Link>
          </li>

          <li>
            <Link href="/news/2">
              <span>Category</span>
              <h3 className={lexend.className}>
                Title Title Title Title Title Title Title Title
              </h3>
              <span>5 min</span>
            </Link>
          </li>

          <li>
            <Link href="/news/2">
              <span>Category</span>
              <h3 className={lexend.className}>
                Title Title Title Title Title Title Title Title
              </h3>
              <span>5 min</span>
            </Link>
          </li>

          <li>
            <Link href="/news/2">
              <span>Category</span>
              <h3 className={lexend.className}>
                Title Title Title Title Title Title Title Title
              </h3>
              <span>5 min</span>
            </Link>
          </li>

          <li>
            <Link href="/news/2">
              <span>Category</span>
              <h3 className={lexend.className}>
                Title Title Title Title Title Title Title Title
              </h3>
              <span>5 min</span>
            </Link>
          </li>

          <li>
            <Link href="/news/2">
              <span>Category</span>
              <h3 className={lexend.className}>
                Title Title Title Title Title Title Title Title
              </h3>
              <span>5 min</span>
            </Link>
          </li>

          <li>
            <Link href="/news/2">
              <span>Category</span>
              <h3 className={lexend.className}>
                Title Title Title Title Title Title Title Title
              </h3>
              <span>5 min</span>
            </Link>
          </li>

          <li>
            <Link href="/news/2">
              <span>Category</span>
              <h3 className={lexend.className}>
                Title Title Title Title Title Title Title Title
              </h3>
              <span>5 min</span>
            </Link>
          </li>

          <li>
            <Link href="/news/2">
              <span>Category</span>
              <h3 className={lexend.className}>
                Title Title Title Title Title Title Title Title
              </h3>
              <span>5 min</span>
            </Link>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default page;
