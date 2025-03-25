-- MySQL dump 10.13  Distrib 9.2.0, for macos13.7 (x86_64)
--
-- Host: 127.0.0.1    Database: zek_music
-- ------------------------------------------------------
-- Server version	9.2.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `_prisma_migrations`
--

DROP TABLE IF EXISTS `_prisma_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_prisma_migrations`
--

LOCK TABLES `_prisma_migrations` WRITE;
/*!40000 ALTER TABLE `_prisma_migrations` DISABLE KEYS */;
INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES ('13b31a96-326e-48c6-afea-814d33be517a','17a5e0163f1eb1577755b7ca85ab6638170ec712e41ead7e05d652f5a0182bef','2025-03-04 15:28:03.751','20250304152803_removed_unique_to_collaborator_links',NULL,NULL,'2025-03-04 15:28:03.439',1),('1713c2d7-aeb5-421f-ab9d-940c852e3124','1c8050450784b25bc89979aa770342cf5bc0a908d83991392976972d6420c6a3','2025-02-26 01:37:31.055','20250226013730_added_time_to_events',NULL,NULL,'2025-02-26 01:37:31.005',1),('1a1eaad8-e882-46fa-b236-e873ef17624e','2a181e9ae0bc77fe2ba794970d7f4de087f934f46e5679df4fb25d9e1d06c1ad','2025-02-26 01:34:08.250','20250224124118_updated_event_model',NULL,NULL,'2025-02-26 01:34:08.227',1),('36f88d72-2589-4572-b404-a6b0484165bc','57f35d4ec433eade1fd5d4e64dee29e41df67582780312bf41bc0bdf3728faef','2025-02-27 11:41:37.741','20250227114137_changed_relation_names_on_services',NULL,NULL,'2025-02-27 11:41:37.622',1),('3838a29e-9029-4b13-887b-3abbe1b228fe','75a811820244581733d7f1b5335f7614d8691ba6005bbe962196dd5d31f296a7','2025-02-26 01:34:08.314','20250225202148_',NULL,NULL,'2025-02-26 01:34:08.284',1),('3abcb936-c074-4d2e-8c58-bf043188e47f','98ed2e66179c63b02362402e79ce24e711b3bd485031aa407e4454173214515e','2025-02-26 01:34:08.475','20250225202424_slug_to_everyone',NULL,NULL,'2025-02-26 01:34:08.316',1),('3bad9c87-520f-4313-bbaf-1c123c9563af','ff1649239d0c750459fde565cdf00dc65a0cd85fa03e240ec389c7f524d7ada7','2025-03-03 16:15:04.936','20250303161504_tiny_to_long_on_news_teaser',NULL,NULL,'2025-03-03 16:15:04.863',1),('3c67786a-1fdd-441f-b967-c92c5021ce47','d7a4ae70591c9a74aacb5a99d9e1aa0fa7e20df1ef6aa857a54e2305487334b4','2025-02-27 14:48:02.688','20250227144802_added_created_at_to_photos',NULL,NULL,'2025-02-27 14:48:02.651',1),('427ecd80-9a59-4d35-9e3c-ae5e459e4ff5','f14dbc50764afccf9c6b675fd4228aadcc5af772d74047198518a2b4170b86fa','2025-02-26 01:34:08.047','20250220163727_music_streaming_links',NULL,NULL,'2025-02-26 01:34:07.944',1),('4b464a1f-026e-4427-b8c6-2763536ac17e','c98901d2fe0919daf162a300dd2a0d7d7a8c1c3dc602115b0fc76fbf58c9c68b','2025-02-26 01:34:07.526','20250211015931_db_tables_at_current_app_state',NULL,NULL,'2025-02-26 01:34:07.153',1),('5a1de088-d66a-4f39-8be2-97e7e1cec26a','098b90dcb4c749fde070be27a01a1a03060770625b7e6953076f1463c8ada32e','2025-02-26 01:34:07.151','20250211000302_init',NULL,NULL,'2025-02-26 01:34:07.102',1),('66672133-deb9-4461-950c-1d2cb8067f51','bb0e137fd256a911e2d6f290e6d87fbed9c319c9d74d657884c086e2bfef51de','2025-02-26 01:34:08.226','20250224123452_finished_models',NULL,NULL,'2025-02-26 01:34:08.095',1),('8b333696-fc1b-4313-9812-c10c75b19237','49085bf64e62137a48aad621dbfa48637a954a9b57532cd340f3486809a67718','2025-02-27 12:27:22.554','20250227122722_added_links_to_collaborators',NULL,NULL,'2025-02-27 12:27:22.256',1),('95e0704e-1bb1-4e9a-808d-48866f459866','f4c3c03570d876a4eec9893c0c1068b1b0dc8a0b07c7460cee11d08d050056d3','2025-02-26 01:34:08.509','20250225202533_unique_to_slugs',NULL,NULL,'2025-02-26 01:34:08.476',1),('a90b1b8d-14d3-4692-a835-a3b3796b86b0','f0d818c45784d617112afcd504b66cbc02361ffa25e25cada03410601aa2f267','2025-02-27 16:52:12.751','20250227165212_corrected_video_table',NULL,NULL,'2025-02-27 16:52:12.739',1),('ba9a3f02-00a4-4556-bce9-726371c211fc','69a6268339775fa062e7cc8eb0c714264b7022c5055cebcb1b31376411a19944','2025-02-27 16:49:33.171','20250227164933_corrected_video_table',NULL,NULL,'2025-02-27 16:49:33.100',1),('be14f9ed-c20c-4857-a103-7497a279d49e','6385262cb2d50745bbb46b431d7a85fb135365137249787dbef6714b79d72c33','2025-02-26 01:34:08.094','20250223012159_completed_event_table',NULL,NULL,'2025-02-26 01:34:08.048',1),('c1370726-906e-41d1-9cc3-74b2ad540d0d','196fcdfaafc05f52caa2f0b542489c0a2577de6ee251414aeb5ebb14c2b99009','2025-02-27 09:40:05.375','20250227094005_added_relation_type_to_setup_items',NULL,NULL,'2025-02-27 09:40:05.251',1),('c83e562a-e0d7-4b99-ad0e-7e901898c290','517cbb49aa24c45a0918f27a4efc76ac3fc9174dabb7ec2d95686b50b9a05c8b','2025-02-26 01:34:07.942','20250220163452_collaborators_tables',NULL,NULL,'2025-02-26 01:34:07.675',1),('cee4fd56-68c5-4cc5-b111-ab89f39af64c','902a970a8d7af2d1f0a1a9a3d76ad6f585daaa1c770afb2d0cf681e59e9718bd','2025-02-27 16:05:57.971','20250227160557_added_type_relation_to_audios',NULL,NULL,'2025-02-27 16:05:57.868',1),('d0347a6d-e53c-4bd3-81c4-401fbe82ccbe','b1c6441adce9572bf3569c402b740084d840fedb8354cadd76f2bf98f9f69b7a','2025-02-26 01:34:07.673','20250218161756_collaborations_tables',NULL,NULL,'2025-02-26 01:34:07.527',1),('d843bac2-a1fc-45d1-b72b-6104e61c3fae','715123f5c4d1d226040103a0a026ec603ca7fcc1d798569535e201d34e0510b5','2025-02-26 07:41:02.860','20250226074102_end_time_mandatory',NULL,NULL,'2025-02-26 07:41:02.793',1),('d98574cd-59c8-4a06-acf4-0d7400868b24','5dbc78a96a4ff063677191407a120af571033cc15b54cd8d314b58a8ea176b88','2025-02-26 01:34:08.284','20250225202051_',NULL,NULL,'2025-02-26 01:34:08.252',1);
/*!40000 ALTER TABLE `_prisma_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Audio`
--

DROP TABLE IF EXISTS `Audio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Audio` (
  `id` int NOT NULL AUTO_INCREMENT,
  `thumbnailSrc` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `thumbnailAlt` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `artist` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Zek',
  `amazonMusicLink` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `appleMusicLink` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `deezerLink` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `spotifyLink` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tidalLink` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `audioTypeId` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Audio_spotifyLink_key` (`spotifyLink`),
  UNIQUE KEY `Audio_tidalLink_key` (`tidalLink`),
  UNIQUE KEY `Audio_deezerLink_key` (`deezerLink`),
  UNIQUE KEY `Audio_appleMusicLink_key` (`appleMusicLink`),
  UNIQUE KEY `Audio_amazonMusicLink_key` (`amazonMusicLink`),
  KEY `Audio_audioTypeId_fkey` (`audioTypeId`),
  CONSTRAINT `Audio_audioTypeId_fkey` FOREIGN KEY (`audioTypeId`) REFERENCES `AudioType` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Audio`
--

LOCK TABLES `Audio` WRITE;
/*!40000 ALTER TABLE `Audio` DISABLE KEYS */;
INSERT INTO `Audio` (`id`, `thumbnailSrc`, `thumbnailAlt`, `title`, `artist`, `amazonMusicLink`, `appleMusicLink`, `deezerLink`, `spotifyLink`, `tidalLink`, `audioTypeId`) VALUES (1,'shofukan-hear.png','HEAR','Waste wind (GameJam \"AAA\" LORIA 2024 - Best OST)','Zek','https://music.amazon.fr/albums/B0DL3NNHZY?marketplaceId=A13V1IB3VIYZZH&musicTerritory=FR&ref=dm_sh_KPa5QFsLjUdpsrIVVkutDOwkb&trackAsin=B0DL3NL6DK','https://music.apple.com/fr/album/waste-wind-gamejam-aaa-loria-2024-best-ost/1776462240?i=1776462241','https://deezer.page.link/8XgDQr9qnSR4UW4F7','https://open.spotify.com/album/6PIeUWxGWDOveLuGcKFSEY','https://tidal.com/browse/track/395971255',1);
/*!40000 ALTER TABLE `Audio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `AudioType`
--

DROP TABLE IF EXISTS `AudioType`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `AudioType` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `AudioType_name_key` (`name`),
  UNIQUE KEY `AudioType_slug_key` (`slug`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `AudioType`
--

LOCK TABLES `AudioType` WRITE;
/*!40000 ALTER TABLE `AudioType` DISABLE KEYS */;
INSERT INTO `AudioType` (`id`, `name`, `slug`) VALUES (1,'Single','single'),(2,'EP','ep'),(3,'Album','album');
/*!40000 ALTER TABLE `AudioType` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `BlogPost`
--

DROP TABLE IF EXISTS `BlogPost`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `BlogPost` (
  `id` int NOT NULL AUTO_INCREMENT,
  `thumbnailSrc` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `thumbnailAlt` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `readTime` tinyint NOT NULL,
  `categoryId` int NOT NULL,
  `body` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `BlogPost_title_key` (`title`),
  KEY `BlogPost_categoryId_fkey` (`categoryId`),
  CONSTRAINT `BlogPost_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `BlogPostCategory` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `BlogPost`
--

LOCK TABLES `BlogPost` WRITE;
/*!40000 ALTER TABLE `BlogPost` DISABLE KEYS */;
INSERT INTO `BlogPost` (`id`, `thumbnailSrc`, `thumbnailAlt`, `title`, `readTime`, `categoryId`, `body`) VALUES (1,'clip-sevenProd.jpg','Zek','On m\'appelle souvent Zek',3,1,'Je m\'appelle Ézéchiel Johnstone, j\'ai 25 ans, et je suis développeur web spécialisé en Next.js 15 ainsi que musicien semi-professionnel, bassiste et pianiste. Mon parcours est marqué par une double passion pour la technologie et la musique, deux univers qui, bien que distincts, ont toujours été pour moi des moyens complémentaires d’exprimer ma créativité. Depuis plusieurs années, je me consacre à la création d’expériences numériques innovantes, en mettant mon expertise technique au service de projets variés, allant du développement d’applications web modernes à l’intégration de services comme Spotify et Instagram dans des plateformes interactives.  \n\n### Mon parcours en développement web  \n\nDès mes débuts dans le développement, j’ai été attiré par la possibilité de créer des outils dynamiques et intuitifs qui améliorent le quotidien des utilisateurs. Ma spécialisation en Next.js 15 me permet de concevoir des applications performantes et optimisées, en exploitant pleinement les capacités du framework pour offrir une navigation fluide et rapide. Grâce à Prisma et MySQL, je développe des bases de données robustes et évolutives, garantissant une gestion efficace des informations et une structure adaptée aux besoins spécifiques de chaque projet.  \n\nJe porte une attention particulière à l’expérience utilisateur et à l’ergonomie des interfaces. J’utilise Tailwind CSS pour concevoir des designs épurés et responsives, qui s’adaptent parfaitement à tous les types d’écrans. Mon approche du développement est centrée sur la simplicité et l’efficacité : je privilégie des solutions qui optimisent les performances sans compromettre l’esthétique ni la convivialité. J’ai également une forte affinité avec l’intégration d’API et la gestion des données en temps réel, des aspects essentiels pour développer des applications interactives et connectées.  \n\nAu fil des années, j’ai eu l’opportunité de travailler sur divers projets, certains à visée purement technique, d’autres plus engagés culturellement. L’un des projets les plus marquants de mon parcours est la création d’une vidéothèque en ligne pour le **BeatHaven Festival**, un événement musical qui devait réunir de nombreux artistes mais qui a été annulé en raison de l’épidémie de Monkeypox. Ce projet m’a permis de mettre en place une plateforme immersive où les artistes pouvaient partager leurs performances et interagir avec leur public malgré l’annulation du festival. Ce fut une expérience enrichissante, à la croisée de mes compétences en développement et de ma passion pour la musique, qui m’a conforté dans ma volonté d’exploiter la technologie au service de la culture et de l’art.  \n\n### La musique : une passion aussi forte que le code  \n\nSi le développement web est mon métier, la musique est mon autre grande passion. Depuis mon plus jeune âge, j’ai été fasciné par la richesse du son et la manière dont il peut transmettre des émotions profondes. Je suis bassiste et pianiste semi-professionnel, et je m’investis dans différents projets musicaux, que ce soit en groupe, en studio ou en solo. La basse et le piano sont deux instruments qui, bien que très différents, se complètent parfaitement dans ma vision de la musique.  \n\nLa basse, avec son rôle rythmique et harmonique fondamental, est un instrument que j’apprécie particulièrement pour sa capacité à donner de la profondeur et du groove à une composition. Que ce soit dans un contexte funk, jazz, rock ou même électro, elle apporte une assise solide et une dynamique essentielle à la musique. Le piano, quant à lui, est un instrument qui me permet d’explorer une palette sonore plus large, d’expérimenter avec les harmonies et de composer mes propres morceaux.  \n\nEn tant que musicien, je me nourris de nombreuses influences, allant du jazz au rock progressif, en passant par la musique classique et les nouvelles tendances électroniques. J’aime expérimenter et fusionner les styles, cherchant constamment à enrichir mon jeu et à repousser mes limites. J’accorde aussi beaucoup d’importance à l’improvisation, un aspect qui, à mon sens, se rapproche du développement web : dans les deux cas, il s’agit de jongler avec des éléments connus pour créer quelque chose d’unique et de cohérent.  \n\n### Un équilibre entre technologie et créativité  \n\nCe qui me motive au quotidien, c’est cette capacité à jongler entre deux mondes qui, à première vue, peuvent sembler opposés, mais qui en réalité partagent de nombreuses similitudes. Que ce soit en écrivant du code ou en composant une ligne de basse, il y a toujours cette recherche d’équilibre entre structure et liberté, entre rigueur et expression personnelle.  \n\nDans mes projets, je cherche avant tout à créer des expériences qui ont du sens, qu’elles soient numériques ou artistiques. J’aime travailler sur des applications qui apportent une réelle valeur ajoutée, que ce soit en facilitant la vie des utilisateurs, en mettant en avant des artistes ou en permettant à des communautés de se rassembler autour d’une passion commune.  \n\nMon objectif est de continuer à évoluer dans ces deux domaines, en approfondissant mes compétences techniques tout en poursuivant mon exploration musicale. Je suis toujours à la recherche de nouveaux défis, que ce soit un projet web ambitieux à développer ou une nouvelle approche musicale à explorer. Entre technologie et musique, je construis mon propre univers, un espace où le code et les notes se répondent et s’inspirent mutuellement.'),(2,'shofukan-hear.png','HEAR','Être utile',5,2,'**Être utile : un moteur d’accomplissement personnel et collectif**  \n\nDans un monde en perpétuel mouvement, où l’individualisme semble parfois prendre le pas sur la solidarité, la notion d’**être utile** revêt une importance fondamentale. Que ce soit dans notre travail, nos relations personnelles ou nos engagements, nous cherchons tous, d’une manière ou d’une autre, à apporter quelque chose aux autres, à avoir un impact positif. Mais qu’est-ce qu’être utile, réellement ? Est-ce une simple action concrète, ou une philosophie de vie ?  \n\n### **L’utilité, bien plus qu’une action, une intention**  \n\nÊtre utile ne se résume pas seulement à accomplir une tâche ou à répondre à un besoin immédiat. Ce n’est pas uniquement réparer un objet cassé, donner de l’argent à une cause ou aider quelqu’un à déménager. C’est avant tout une démarche, une volonté d’apporter une valeur ajoutée, qu’elle soit matérielle, intellectuelle ou émotionnelle.  \n\nNous pouvons être utiles de mille manières : en écoutant un ami qui traverse une période difficile, en partageant nos connaissances, en contribuant à un projet qui dépasse notre intérêt personnel. L’utilité se trouve dans l’entraide du quotidien, mais aussi dans les petits gestes invisibles qui améliorent la vie des autres sans qu’ils s’en rendent forcément compte.  \n\n### **L’impact de l’utilité sur l’épanouissement personnel**  \n\nIroniquement, en cherchant à être utile aux autres, on se rend souvent compte que c’est aussi à soi-même que l’on apporte quelque chose. Aider donne du sens à nos actions, renforce notre confiance en nous et nous connecte davantage aux autres. De nombreuses études en psychologie montrent que les personnes qui se sentent utiles développent une meilleure estime de soi et un bien-être plus durable.  \n\nDans le cadre professionnel, par exemple, un développeur qui conçoit une application accessible et ergonomique ne fait pas qu’écrire du code : il facilite la vie de ses utilisateurs. Un artiste qui partage sa musique ne fait pas qu’exprimer une émotion : il touche, inspire et parfois même réconforte ceux qui l’écoutent. Chaque métier, chaque passion peut être utile dès lors qu’elle répond à un besoin, même implicite.  \n\n### **L’utilité dans un monde connecté**  \n\nAujourd’hui, avec les réseaux sociaux, le partage de connaissances et les plateformes collaboratives, il n’a jamais été aussi simple d’être utile. On peut enseigner, conseiller, créer du contenu qui aide des milliers de personnes sans même les rencontrer. À l’ère du numérique, notre impact peut dépasser les frontières physiques et toucher des gens que l’on n’aurait jamais croisés autrement.  \n\nMais attention, être utile ne signifie pas se perdre dans l’attente de reconnaissance ou l’envie d’exister aux yeux des autres. L’utilité sincère vient d’une motivation intérieure, d’un désir d’apporter quelque chose sans forcément attendre un retour immédiat.  \n\n### **Comment être plus utile au quotidien ?**  \n\nSi l’on veut cultiver cette notion dans notre vie, il suffit de commencer par des choses simples :  \n\n1. **Écouter activement** : Parfois, une oreille attentive vaut plus que tous les conseils du monde.  \n2. **Partager ses compétences** : Que ce soit par un tutoriel, un mentorat ou une simple discussion, transmettre ce que l’on sait peut aider énormément.  \n3. **S’impliquer dans des projets** : Que ce soit une association, un projet open-source ou une initiative locale, donner un peu de son temps peut faire une grande différence.  \n4. **Créer avec un objectif** : Que ce soit dans l’art, la technologie ou toute autre discipline, donner une finalité utile à ses créations leur confère une valeur plus grande.  \n5. **Agir avec bienveillance** : Parfois, un simple mot d’encouragement ou un geste désintéressé suffit à illuminer la journée de quelqu’un.  \n\n### **Conclusion : une philosophie à adopter**  \n\nÊtre utile, c’est finalement choisir d’avoir un impact, quel qu’il soit, et à son échelle. Ce n’est pas forcément résoudre les grands problèmes du monde, mais simplement apporter sa pierre à l’édifice, contribuer, d’une manière ou d’une autre, à rendre la vie plus fluide, plus douce, plus inspirante.  \n\nEt si chacun d’entre nous faisait, chaque jour, un petit geste pour être utile à quelqu’un d’autre, imaginez le monde que nous pourrions construire ensemble.'),(8,'proxy-image.jpeg','HEAR','Trouver du sens',5,2,'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur nesciunt quae dolores voluptatem, facere, laborum eius velit odio dolore sunt voluptates aliquam quidem, commodi nihil nisi. Perferendis animi ea exercitationem. Asperiores, nesciunt voluptas eos repellendus adipisci vero dolores. A enim aut tempore hic soluta obcaecati, vel doloremque placeat perspiciatis provident illo itaque quisquam eius omnis, rerum reprehenderit voluptas libero voluptates. Nobis, sunt fugiat numquam, vero eligendi autem dignissimos magni commodi quae ullam accusantium iure, voluptates nostrum dolore perferendis veniam odit vitae nam rerum suscipit illo. Cum facere alias quae minus! Incidunt reiciendis laboriosam non magni nam modi, quam ex. Ducimus magnam est error consequuntur, obcaecati velit eaque commodi pariatur suscipit laudantium, eveniet non excepturi repellendus nostrum quasi nobis aut? Esse? Ipsum, sint totam! Cum, perspiciatis impedit nostrum libero dicta nihil facilis assumenda vero eius in, aut unde esse cupiditate natus accusamus error nemo rerum minima ex, officia earum architecto illo? Eaque, similique suscipit saepe culpa numquam quos tempore facere animi est. Magni, ducimus dolore praesentium dolorum quo cum quis quia, consequuntur ullam at dolores impedit neque iste suscipit amet doloribus? Blanditiis dignissimos possimus asperiores suscipit nulla, nisi veniam vel recusandae quo natus nesciunt nam et corrupti corporis ducimus dolore neque esse adipisci harum perspiciatis numquam amet sequi incidunt exercitationem! Enim. Laboriosam eaque excepturi sunt recusandae facilis neque quia nisi numquam reiciendis voluptas repellendus earum dicta magni eveniet in quaerat quos, error itaque officia provident harum animi doloremque illo dolores! Necessitatibus! Temporibus aliquid atque hic asperiores illo odio consequuntur vitae accusantium, ducimus libero dolor voluptate corrupti vero debitis blanditiis laborum minima, molestias sit doloribus veniam nulla voluptatibus doloremque? Corporis, accusantium tenetur. Cupiditate, pariatur! Modi minima, dicta repudiandae quo tenetur officia voluptatem odio rem blanditiis. Delectus perspiciatis officiis ducimus officia unde asperiores quidem minus cumque explicabo, at consequuntur maiores laboriosam odio autem. Accusamus quasi laudantium dicta libero? Tempora consequatur placeat maiores accusamus esse, blanditiis consequuntur maxime eligendi eaque ullam dolorem facere. Minima, velit fuga? Est aperiam, doloribus ad fuga magnam mollitia adipisci? Adipisci aliquam cum cumque, iste nisi amet sed accusamus animi ab consectetur! Sequi, aut hic quos sint officiis tenetur harum soluta exercitationem, magni veritatis quae natus modi nostrum, deserunt repudiandae. Illum esse numquam quae sint deserunt corporis perspiciatis. Vitae, animi vero, possimus laboriosam, rerum sint culpa accusantium velit officia nostrum cumque sit dolorum in necessitatibus tempore voluptate debitis ratione blanditiis. Numquam assumenda id laboriosam provident libero aliquam at sed quod distinctio in esse tempore saepe, iure dolorum magni! Reiciendis voluptates accusantium officiis distinctio aut dicta animi dolorum laboriosam alias reprehenderit. Ex quos at aperiam odit sapiente dolores iure minus aut, veniam, molestias rerum repellendus ad. Quae ratione maiores porro, alias nostrum laboriosam doloremque accusamus, sequi natus enim modi expedita numquam? Delectus ad expedita, libero, mollitia corrupti eum velit eos laboriosam quis perferendis, illum minus totam hic dolores fuga iure quasi quod quae magni nobis nesciunt vel accusamus! Voluptate, nulla laudantium? Perferendis dolor a doloremque laborum voluptas non quam unde eius odit voluptate magni libero vitae laudantium eaque, fugit laboriosam atque aliquam iste exercitationem illum. Sequi illo molestiae laborum animi recusandae! Est quod voluptatem, asperiores cupiditate consequatur nobis unde, velit nemo mollitia corrupti alias. Soluta incidunt unde similique impedit cupiditate cum, atque asperiores laborum velit culpa? Tempore architecto velit labore ipsa. Corporis illum in nemo cum beatae aspernatur voluptatum quod ipsum placeat, voluptate inventore mollitia quam, facere laudantium, recusandae asperiores eum earum perspiciatis sequi ullam ut assumenda possimus. Sed, tenetur incidunt. Rem quam blanditiis dignissimos cupiditate accusamus deleniti accusantium officia dolorem? Fugit consequatur quaerat at ea! Ipsum amet eius neque quibusdam. Quisquam odit facere fugiat aspernatur et doloribus dolorem minus! Sequi? Dignissimos eius totam optio facere similique earum nulla doloribus nam? Autem voluptates consequuntur, incidunt veritatis veniam quam doloremque magni nobis! Aut cum earum veritatis labore modi necessitatibus facere eos eligendi. Reiciendis fuga nostrum ut quis. Nostrum tempora exercitationem facilis inventore molestiae laudantium architecto quisquam odio fugiat, soluta cumque blanditiis placeat sunt pariatur reprehenderit officia minus dolore possimus? Impedit, eveniet dicta. Quam veniam et qui quo. Officiis quisquam rem sit fugit. Esse, expedita deleniti aut at ex quaerat nobis nihil amet rerum culpa ullam, modi reiciendis consequatur ea et impedit! Exercitationem! Numquam eaque rerum ullam qui architecto adipisci perspiciatis cum veniam tenetur est deserunt sit repellendus nisi nulla libero atque, officiis quisquam beatae eius excepturi, a, quae corporis optio! Numquam, minima? Placeat molestias at maxime sit, voluptates sint optio temporibus consequuntur eius iste incidunt voluptate nemo enim neque numquam. Itaque eveniet ducimus, adipisci tenetur accusantium rem saepe officiis atque doloribus eius. Quidem, fugiat ab quia deleniti accusantium blanditiis nemo in quod, harum, vero quo ducimus alias voluptatum omnis eligendi incidunt? Nostrum ducimus fugit incidunt modi veritatis rerum asperiores facilis, mollitia aspernatur? Culpa, iusto incidunt? Ducimus consectetur quod libero? Soluta voluptatibus natus qui aspernatur blanditiis officia, consequuntur ipsam quo itaque, nemo iusto corrupti, magni voluptate nostrum quia pariatur. Voluptatem natus nostrum laboriosam. Ex aut, perferendis obcaecati placeat exercitationem quaerat rerum ratione laudantium dignissimos tempora consectetur aspernatur dicta, sit eius aperiam aliquam quam! Libero harum possimus esse debitis quod. Atque, deserunt? Ipsum, nesciunt. Asperiores exercitationem omnis ab ut dicta. Quis tenetur deleniti reiciendis vel eaque corrupti eius possimus, excepturi totam quisquam impedit ab sit veritatis dolorum quos nulla commodi, numquam iure, quo aliquam. Molestiae quisquam itaque aspernatur ea odit accusamus, inventore fugit minima laborum magnam ipsa magni animi? Officiis libero praesentium laudantium illum vitae laborum amet ea earum distinctio! Inventore illo quisquam cumque? Hic obcaecati esse aut. Illum nisi consectetur inventore id repudiandae ea quo commodi asperiores sit, tempore similique. Similique repellendus ad voluptas dolore autem alias hic nulla laboriosam, commodi sint enim. Dicta nobis inventore illo sunt, qui adipisci nostrum distinctio maiores hic porro pariatur atque non id repellendus veritatis similique expedita nulla mollitia. Temporibus corrupti voluptatibus consequuntur ipsam amet. Natus, perspiciatis? Suscipit, distinctio quasi magnam molestiae amet odit. Nobis quis ex itaque tempore porro deserunt eos sed voluptatibus ullam eius harum, provident beatae fugiat placeat maiores blanditiis et iste tempora vel. Aperiam saepe labore, officia enim cum atque doloremque numquam, nisi fugiat debitis ab, quia accusantium. Non, cumque totam quos incidunt mollitia ullam placeat numquam fugiat, sed nam repudiandae nemo omnis. Inventore, cumque ex. Velit earum alias quam exercitationem harum possimus animi esse error impedit minus assumenda modi sit quod provident adipisci ullam ducimus, ut omnis rem commodi et ipsam. Aliquid! Quod eligendi voluptatem at hic a cum eos, rem sequi dolorum minus tenetur magnam repellendus porro delectus harum quam praesentium tempore aut repudiandae explicabo suscipit iusto illo labore distinctio! Voluptatum! Impedit nisi quia animi dicta, corrupti, facere ipsa soluta totam eos tenetur modi ea expedita dolor veritatis velit qui iste sequi! Qui maiores quaerat odio placeat magni nobis hic totam. Perspiciatis aliquam, voluptatum quidem culpa nobis enim et sint suscipit ex provident sequi quisquam eveniet asperiores consequatur tempore officiis autem! Inventore quaerat quis consequatur ipsa, veniam minus tenetur iste debitis? Autem id fuga facilis reiciendis culpa qui dignissimos, reprehenderit obcaecati sit ea quasi laboriosam fugit ipsa exercitationem provident nesciunt at, a quam pariatur vel similique. Explicabo, sequi magni! Sunt, perferendis! Repudiandae qui neque odit asperiores reprehenderit quisquam impedit ipsa. Harum ducimus blanditiis fugit consectetur sunt laborum quae velit, autem saepe repellendus est tenetur. Perspiciatis facere eum natus sapiente quo totam!');
/*!40000 ALTER TABLE `BlogPost` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `BlogPostCategory`
--

DROP TABLE IF EXISTS `BlogPostCategory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `BlogPostCategory` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `BlogPostCategory_name_key` (`name`),
  UNIQUE KEY `BlogPostCategory_slug_key` (`slug`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `BlogPostCategory`
--

LOCK TABLES `BlogPostCategory` WRITE;
/*!40000 ALTER TABLE `BlogPostCategory` DISABLE KEYS */;
INSERT INTO `BlogPostCategory` (`id`, `name`, `slug`) VALUES (1,'Entrepreneuriat','entrepreneurship'),(2,'Sagesse','wisdom');
/*!40000 ALTER TABLE `BlogPostCategory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Collaborator`
--

DROP TABLE IF EXISTS `Collaborator`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Collaborator` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pictureSrc` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pictureAlt` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `extLink1` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `extLink2` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `extLink3` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `extLink4` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `extLink5` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `link_bandcamp` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `link_facebook` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `link_fiverr` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `link_instagram` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `link_linkedin` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Collaborator_name_key` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Collaborator`
--

LOCK TABLES `Collaborator` WRITE;
/*!40000 ALTER TABLE `Collaborator` DISABLE KEYS */;
INSERT INTO `Collaborator` (`id`, `name`, `pictureSrc`, `pictureAlt`, `description`, `extLink1`, `extLink2`, `extLink3`, `extLink4`, `extLink5`, `link_bandcamp`, `link_facebook`, `link_fiverr`, `link_instagram`, `link_linkedin`) VALUES (1,'Zek','pp-800x800.png','Zek','Je m\'appelle Ézéchiel Johnstone et je suis le goat du linkedin bullshit',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'https://www.instagram.com/zek.songs/','https://www.linkedin.com/in/ezechiel-johnstone/'),(2,'Eliot','eliot_foltz.jpg','Zek','Je m\'appelle Eliot et je peux te faire une musique de film en 2 semaines !',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'https://www.instagram.com/eliotfoltz?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==','');
/*!40000 ALTER TABLE `Collaborator` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `CollaboratorsOnAudios`
--

DROP TABLE IF EXISTS `CollaboratorsOnAudios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `CollaboratorsOnAudios` (
  `audioId` int NOT NULL,
  `collaboratorId` int NOT NULL,
  PRIMARY KEY (`audioId`,`collaboratorId`),
  KEY `CollaboratorsOnAudios_collaboratorId_fkey` (`collaboratorId`),
  CONSTRAINT `CollaboratorsOnAudios_audioId_fkey` FOREIGN KEY (`audioId`) REFERENCES `Audio` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `CollaboratorsOnAudios_collaboratorId_fkey` FOREIGN KEY (`collaboratorId`) REFERENCES `Collaborator` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CollaboratorsOnAudios`
--

LOCK TABLES `CollaboratorsOnAudios` WRITE;
/*!40000 ALTER TABLE `CollaboratorsOnAudios` DISABLE KEYS */;
INSERT INTO `CollaboratorsOnAudios` (`audioId`, `collaboratorId`) VALUES (1,1);
/*!40000 ALTER TABLE `CollaboratorsOnAudios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `CollaboratorsOnPhotos`
--

DROP TABLE IF EXISTS `CollaboratorsOnPhotos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `CollaboratorsOnPhotos` (
  `galleryImageId` int NOT NULL,
  `collaboratorId` int NOT NULL,
  PRIMARY KEY (`collaboratorId`,`galleryImageId`),
  KEY `CollaboratorsOnPhotos_galleryImageId_fkey` (`galleryImageId`),
  CONSTRAINT `CollaboratorsOnPhotos_collaboratorId_fkey` FOREIGN KEY (`collaboratorId`) REFERENCES `Collaborator` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `CollaboratorsOnPhotos_galleryImageId_fkey` FOREIGN KEY (`galleryImageId`) REFERENCES `GalleryImage` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CollaboratorsOnPhotos`
--

LOCK TABLES `CollaboratorsOnPhotos` WRITE;
/*!40000 ALTER TABLE `CollaboratorsOnPhotos` DISABLE KEYS */;
INSERT INTO `CollaboratorsOnPhotos` (`galleryImageId`, `collaboratorId`) VALUES (1,1),(1,2),(2,1);
/*!40000 ALTER TABLE `CollaboratorsOnPhotos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `CollaboratorsOnVideos`
--

DROP TABLE IF EXISTS `CollaboratorsOnVideos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `CollaboratorsOnVideos` (
  `collaboratorId` int NOT NULL,
  `videoId` int NOT NULL,
  PRIMARY KEY (`collaboratorId`,`videoId`),
  KEY `CollaboratorsOnVideos_videoId_fkey` (`videoId`),
  CONSTRAINT `CollaboratorsOnVideos_collaboratorId_fkey` FOREIGN KEY (`collaboratorId`) REFERENCES `Collaborator` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `CollaboratorsOnVideos_videoId_fkey` FOREIGN KEY (`videoId`) REFERENCES `Video` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CollaboratorsOnVideos`
--

LOCK TABLES `CollaboratorsOnVideos` WRITE;
/*!40000 ALTER TABLE `CollaboratorsOnVideos` DISABLE KEYS */;
INSERT INTO `CollaboratorsOnVideos` (`collaboratorId`, `videoId`) VALUES (1,1),(2,1);
/*!40000 ALTER TABLE `CollaboratorsOnVideos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Event`
--

DROP TABLE IF EXISTS `Event`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Event` (
  `id` int NOT NULL AUTO_INCREMENT,
  `description` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `thumbnailSrc` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `thumbnailAlt` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `startDate` date NOT NULL,
  `endDate` date DEFAULT NULL,
  `city` tinytext COLLATE utf8mb4_unicode_ci NOT NULL,
  `state` tinytext COLLATE utf8mb4_unicode_ci,
  `country` tinytext COLLATE utf8mb4_unicode_ci NOT NULL,
  `place` tinytext COLLATE utf8mb4_unicode_ci NOT NULL,
  `isPaid` tinyint(1) NOT NULL DEFAULT '0',
  `typeId` int NOT NULL,
  `boxOfficeLink` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `hasProgram` tinyint(1) NOT NULL DEFAULT '0',
  `placeMapLink` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `programLink` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `endTime` time NOT NULL,
  `startTime` time NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Event_title_key` (`title`),
  KEY `Event_typeId_fkey` (`typeId`),
  CONSTRAINT `Event_typeId_fkey` FOREIGN KEY (`typeId`) REFERENCES `EventType` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Event`
--

LOCK TABLES `Event` WRITE;
/*!40000 ALTER TABLE `Event` DISABLE KEYS */;
INSERT INTO `Event` (`id`, `description`, `thumbnailSrc`, `thumbnailAlt`, `startDate`, `endDate`, `city`, `state`, `country`, `place`, `isPaid`, `typeId`, `boxOfficeLink`, `hasProgram`, `placeMapLink`, `programLink`, `title`, `endTime`, `startTime`) VALUES (1,'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur nesciunt quae dolores voluptatem, facere, laborum eius velit odio dolore sunt voluptates aliquam quidem, commodi nihil nisi. Perferendis animi ea exercitationem. Asperiores, nesciunt voluptas eos repellendus adipisci vero dolores. A enim aut tempore hic soluta obcaecati, vel doloremque placeat perspiciatis provident illo itaque quisquam eius omnis, rerum reprehenderit voluptas libero voluptates. Nobis, sunt fugiat numquam, vero eligendi autem dignissimos magni commodi quae ullam accusantium iure, voluptates nostrum dolore perferendis veniam odit vitae nam rerum suscipit illo. Cum facere alias quae minus! Incidunt reiciendis laboriosam non magni nam modi, quam ex. Ducimus magnam est error consequuntur, obcaecati velit eaque commodi pariatur suscipit laudantium, eveniet non excepturi repellendus nostrum quasi nobis aut? Esse? Ipsum, sint totam! Cum, perspiciatis impedit nostrum libero dicta nihil facilis assumenda vero eius in, aut unde esse cupiditate natus accusamus error nemo rerum minima ex, officia earum architecto illo? Eaque, similique suscipit saepe culpa numquam quos tempore facere animi est. Magni, ducimus dolore praesentium dolorum quo cum quis quia, consequuntur ullam at dolores impedit neque iste suscipit amet doloribus? Blanditiis dignissimos possimus asperiores suscipit nulla, nisi veniam vel recusandae quo natus nesciunt nam et corrupti corporis ducimus dolore neque esse adipisci harum perspiciatis numquam amet sequi incidunt exercitationem! Enim. Laboriosam eaque excepturi sunt recusandae facilis neque quia nisi numquam reiciendis voluptas repellendus earum dicta magni eveniet in quaerat quos, error itaque officia provident harum animi doloremque illo dolores! Necessitatibus! Temporibus aliquid atque hic asperiores illo odio consequuntur vitae accusantium, ducimus libero dolor voluptate corrupti vero debitis blanditiis laborum minima, molestias sit doloribus veniam nulla voluptatibus doloremque? Corporis, accusantium tenetur. Cupiditate, pariatur! Modi minima, dicta repudiandae quo tenetur officia voluptatem odio rem blanditiis. Delectus perspiciatis officiis ducimus officia unde asperiores quidem minus cumque explicabo, at consequuntur maiores laboriosam odio autem. Accusamus quasi laudantium dicta libero? Tempora consequatur placeat maiores accusamus esse, blanditiis consequuntur maxime eligendi eaque ullam dolorem facere. Minima, velit fuga? Est aperiam, doloribus ad fuga magnam mollitia adipisci? Adipisci aliquam cum cumque, iste nisi amet sed accusamus animi ab consectetur! Sequi, aut hic quos sint officiis tenetur harum soluta exercitationem, magni veritatis quae natus modi nostrum, deserunt repudiandae. Illum esse numquam quae sint deserunt corporis perspiciatis. Vitae, animi vero, possimus laboriosam, rerum sint culpa accusantium velit officia nostrum cumque sit dolorum in necessitatibus tempore voluptate debitis ratione blanditiis. Numquam assumenda id laboriosam provident libero aliquam at sed quod distinctio in esse tempore saepe, iure dolorum magni! Reiciendis voluptates accusantium officiis distinctio aut dicta animi dolorum laboriosam alias reprehenderit. Ex quos at aperiam odit sapiente dolores iure minus aut, veniam, molestias rerum repellendus ad. Quae ratione maiores porro, alias nostrum laboriosam doloremque accusamus, sequi natus enim modi expedita numquam? Delectus ad expedita, libero, mollitia corrupti eum velit eos laboriosam quis perferendis, illum minus totam hic dolores fuga iure quasi quod quae magni nobis nesciunt vel accusamus! Voluptate, nulla laudantium? Perferendis dolor a doloremque laborum voluptas non quam unde eius odit voluptate magni libero vitae laudantium eaque, fugit laboriosam atque aliquam iste exercitationem illum. Sequi illo molestiae laborum animi recusandae! Est quod voluptatem, asperiores cupiditate consequatur nobis unde, velit nemo mollitia corrupti alias. Soluta incidunt unde similique impedit cupiditate cum, atque asperiores laborum velit culpa? Tempore architecto velit labore ipsa. Corporis illum in nemo cum beatae aspernatur voluptatum quod ipsum placeat, voluptate inventore mollitia quam, facere laudantium, recusandae asperiores eum earum perspiciatis sequi ullam ut assumenda possimus. Sed, tenetur incidunt. Rem quam blanditiis dignissimos cupiditate accusamus deleniti accusantium officia dolorem? Fugit consequatur quaerat at ea! Ipsum amet eius neque quibusdam. Quisquam odit facere fugiat aspernatur et doloribus dolorem minus! Sequi? Dignissimos eius totam optio facere similique earum nulla doloribus nam? Autem voluptates consequuntur, incidunt veritatis veniam quam doloremque magni nobis! Aut cum earum veritatis labore modi necessitatibus facere eos eligendi. Reiciendis fuga nostrum ut quis. Nostrum tempora exercitationem facilis inventore molestiae laudantium architecto quisquam odio fugiat, soluta cumque blanditiis placeat sunt pariatur reprehenderit officia minus dolore possimus? Impedit, eveniet dicta. Quam veniam et qui quo. Officiis quisquam rem sit fugit. Esse, expedita deleniti aut at ex quaerat nobis nihil amet rerum culpa ullam, modi reiciendis consequatur ea et impedit! Exercitationem! Numquam eaque rerum ullam qui architecto adipisci perspiciatis cum veniam tenetur est deserunt sit repellendus nisi nulla libero atque, officiis quisquam beatae eius excepturi, a, quae corporis optio! Numquam, minima? Placeat molestias at maxime sit, voluptates sint optio temporibus consequuntur eius iste incidunt voluptate nemo enim neque numquam. Itaque eveniet ducimus, adipisci tenetur accusantium rem saepe officiis atque doloribus eius. Quidem, fugiat ab quia deleniti accusantium blanditiis nemo in quod, harum, vero quo ducimus alias voluptatum omnis eligendi incidunt? Nostrum ducimus fugit incidunt modi veritatis rerum asperiores facilis, mollitia aspernatur? Culpa, iusto incidunt? Ducimus consectetur quod libero? Soluta voluptatibus natus qui aspernatur blanditiis officia, consequuntur ipsam quo itaque, nemo iusto corrupti, magni voluptate nostrum quia pariatur. Voluptatem natus nostrum laboriosam. Ex aut, perferendis obcaecati placeat exercitationem quaerat rerum ratione laudantium dignissimos tempora consectetur aspernatur dicta, sit eius aperiam aliquam quam! Libero harum possimus esse debitis quod. Atque, deserunt? Ipsum, nesciunt. Asperiores exercitationem omnis ab ut dicta. Quis tenetur deleniti reiciendis vel eaque corrupti eius possimus, excepturi totam quisquam impedit ab sit veritatis dolorum quos nulla commodi, numquam iure, quo aliquam.','clip-sevenProd.jpg','Seven','2025-02-28','2025-02-28','Strasbourg',NULL,'France','Zénith de Strasbourg',1,1,'https://google.fr',0,'https://maps.app.goo.gl/EN3r3bVHgeGKoTbk6',NULL,'Concert de fin d\'année Concert de fin d\'année','22:00:00','19:00:00'),(2,'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur nesciunt quae dolores voluptatem, facere, laborum eius velit odio dolore sunt voluptates aliquam quidem, commodi nihil nisi. Perferendis animi ea exercitationem. Asperiores, nesciunt voluptas eos repellendus adipisci vero dolores. A enim aut tempore hic soluta obcaecati, vel doloremque placeat perspiciatis provident illo itaque quisquam eius omnis, rerum reprehenderit voluptas libero voluptates. Nobis, sunt fugiat numquam, vero eligendi autem dignissimos magni commodi quae ullam accusantium iure, voluptates nostrum dolore perferendis veniam odit vitae nam rerum suscipit illo. Cum facere alias quae minus! Incidunt reiciendis laboriosam non magni nam modi, quam ex. Ducimus magnam est error consequuntur, obcaecati velit eaque commodi pariatur suscipit laudantium, eveniet non excepturi repellendus nostrum quasi nobis aut? Esse? Ipsum, sint totam! Cum, perspiciatis impedit nostrum libero dicta nihil facilis assumenda vero eius in, aut unde esse cupiditate natus accusamus error nemo rerum minima ex, officia earum architecto illo? Eaque, similique suscipit saepe culpa numquam quos tempore facere animi est. Magni, ducimus dolore praesentium dolorum quo cum quis quia, consequuntur ullam at dolores impedit neque iste suscipit amet doloribus? Blanditiis dignissimos possimus asperiores suscipit nulla, nisi veniam vel recusandae quo natus nesciunt nam et corrupti corporis ducimus dolore neque esse adipisci harum perspiciatis numquam amet sequi incidunt exercitationem! Enim. Laboriosam eaque excepturi sunt recusandae facilis neque quia nisi numquam reiciendis voluptas repellendus earum dicta magni eveniet in quaerat quos, error itaque officia provident harum animi doloremque illo dolores! Necessitatibus! Temporibus aliquid atque hic asperiores illo odio consequuntur vitae accusantium, ducimus libero dolor voluptate corrupti vero debitis blanditiis laborum minima, molestias sit doloribus veniam nulla voluptatibus doloremque? Corporis, accusantium tenetur. Cupiditate, pariatur! Modi minima, dicta repudiandae quo tenetur officia voluptatem odio rem blanditiis. Delectus perspiciatis officiis ducimus officia unde asperiores quidem minus cumque explicabo, at consequuntur maiores laboriosam odio autem. Accusamus quasi laudantium dicta libero? Tempora consequatur placeat maiores accusamus esse, blanditiis consequuntur maxime eligendi eaque ullam dolorem facere. Minima, velit fuga? Est aperiam, doloribus ad fuga magnam mollitia adipisci? Adipisci aliquam cum cumque, iste nisi amet sed accusamus animi ab consectetur! Sequi, aut hic quos sint officiis tenetur harum soluta exercitationem, magni veritatis quae natus modi nostrum, deserunt repudiandae. Illum esse numquam quae sint deserunt corporis perspiciatis. Vitae, animi vero, possimus laboriosam, rerum sint culpa accusantium velit officia nostrum cumque sit dolorum in necessitatibus tempore voluptate debitis ratione blanditiis. Numquam assumenda id laboriosam provident libero aliquam at sed quod distinctio in esse tempore saepe, iure dolorum magni! Reiciendis voluptates accusantium officiis distinctio aut dicta animi dolorum laboriosam alias reprehenderit. Ex quos at aperiam odit sapiente dolores iure minus aut, veniam, molestias rerum repellendus ad. Quae ratione maiores porro, alias nostrum laboriosam doloremque accusamus, sequi natus enim modi expedita numquam? Delectus ad expedita, libero, mollitia corrupti eum velit eos laboriosam quis perferendis, illum minus totam hic dolores fuga iure quasi quod quae magni nobis nesciunt vel accusamus! Voluptate, nulla laudantium? Perferendis dolor a doloremque laborum voluptas non quam unde eius odit voluptate magni libero vitae laudantium eaque, fugit laboriosam atque aliquam iste exercitationem illum. Sequi illo molestiae laborum animi recusandae! Est quod voluptatem, asperiores cupiditate consequatur nobis unde, velit nemo mollitia corrupti alias. Soluta incidunt unde similique impedit cupiditate cum, atque asperiores laborum velit culpa? Tempore architecto velit labore ipsa. Corporis illum in nemo cum beatae aspernatur voluptatum quod ipsum placeat, voluptate inventore mollitia quam, facere laudantium, recusandae asperiores eum earum perspiciatis sequi ullam ut assumenda possimus. Sed, tenetur incidunt. Rem quam blanditiis dignissimos cupiditate accusamus deleniti accusantium officia dolorem? Fugit consequatur quaerat at ea! Ipsum amet eius neque quibusdam. Quisquam odit facere fugiat aspernatur et doloribus dolorem minus! Sequi? Dignissimos eius totam optio facere similique earum nulla doloribus nam? Autem voluptates consequuntur, incidunt veritatis veniam quam doloremque magni nobis! Aut cum earum veritatis labore modi necessitatibus facere eos eligendi. Reiciendis fuga nostrum ut quis. Nostrum tempora exercitationem facilis inventore molestiae laudantium architecto quisquam odio fugiat, soluta cumque blanditiis placeat sunt pariatur reprehenderit officia minus dolore possimus? Impedit, eveniet dicta. Quam veniam et qui quo. Officiis quisquam rem sit fugit. Esse, expedita deleniti aut at ex quaerat nobis nihil amet rerum culpa ullam, modi reiciendis consequatur ea et impedit! Exercitationem! Numquam eaque rerum ullam qui architecto adipisci perspiciatis cum veniam tenetur est deserunt sit repellendus nisi nulla libero atque, officiis quisquam beatae eius excepturi, a, quae corporis optio! Numquam, minima? Placeat molestias at maxime sit, voluptates sint optio temporibus consequuntur eius iste incidunt voluptate nemo enim neque numquam. Itaque eveniet ducimus, adipisci tenetur accusantium rem saepe officiis atque doloribus eius. Quidem, fugiat ab quia deleniti accusantium blanditiis nemo in quod, harum, vero quo ducimus alias voluptatum omnis eligendi incidunt? Nostrum ducimus fugit incidunt modi veritatis rerum asperiores facilis, mollitia aspernatur? Culpa, iusto incidunt? Ducimus consectetur quod libero? Soluta voluptatibus natus qui aspernatur blanditiis officia, consequuntur ipsam quo itaque, nemo iusto corrupti, magni voluptate nostrum quia pariatur. Voluptatem natus nostrum laboriosam. Ex aut, perferendis obcaecati placeat exercitationem quaerat rerum ratione laudantium dignissimos tempora consectetur aspernatur dicta, sit eius aperiam aliquam quam! Libero harum possimus esse debitis quod. Atque, deserunt? Ipsum, nesciunt. Asperiores exercitationem omnis ab ut dicta. Quis tenetur deleniti reiciendis vel eaque corrupti eius possimus, excepturi totam quisquam impedit ab sit veritatis dolorum quos nulla commodi, numquam iure, quo aliquam.','shofukan-hear.png','HEAR','2025-03-04',NULL,'Austin','Texas','USA','Golden Bowl',0,2,'https://google.es',0,'https://maps.app.goo.gl/EN3r3bVHgeGKoTbk6',NULL,'Masterclass à Berklee','19:00:00','17:00:00'),(3,'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur nesciunt quae dolores voluptatem, facere, laborum eius velit odio dolore sunt voluptates aliquam quidem, commodi nihil nisi. Perferendis animi ea exercitationem. Asperiores, nesciunt voluptas eos repellendus adipisci vero dolores. A enim aut tempore hic soluta obcaecati, vel doloremque placeat perspiciatis provident illo itaque quisquam eius omnis, rerum reprehenderit voluptas libero voluptates. Nobis, sunt fugiat numquam, vero eligendi autem dignissimos magni commodi quae ullam accusantium iure, voluptates nostrum dolore perferendis veniam odit vitae nam rerum suscipit illo. Cum facere alias quae minus! Incidunt reiciendis laboriosam non magni nam modi, quam ex. Ducimus magnam est error consequuntur, obcaecati velit eaque commodi pariatur suscipit laudantium, eveniet non excepturi repellendus nostrum quasi nobis aut? Esse? Ipsum, sint totam! Cum, perspiciatis impedit nostrum libero dicta nihil facilis assumenda vero eius in, aut unde esse cupiditate natus accusamus error nemo rerum minima ex, officia earum architecto illo? Eaque, similique suscipit saepe culpa numquam quos tempore facere animi est. Magni, ducimus dolore praesentium dolorum quo cum quis quia, consequuntur ullam at dolores impedit neque iste suscipit amet doloribus? Blanditiis dignissimos possimus asperiores suscipit nulla, nisi veniam vel recusandae quo natus nesciunt nam et corrupti corporis ducimus dolore neque esse adipisci harum perspiciatis numquam amet sequi incidunt exercitationem! Enim. Laboriosam eaque excepturi sunt recusandae facilis neque quia nisi numquam reiciendis voluptas repellendus earum dicta magni eveniet in quaerat quos, error itaque officia provident harum animi doloremque illo dolores! Necessitatibus! Temporibus aliquid atque hic asperiores illo odio consequuntur vitae accusantium, ducimus libero dolor voluptate corrupti vero debitis blanditiis laborum minima, molestias sit doloribus veniam nulla voluptatibus doloremque? Corporis, accusantium tenetur. Cupiditate, pariatur! Modi minima, dicta repudiandae quo tenetur officia voluptatem odio rem blanditiis. Delectus perspiciatis officiis ducimus officia unde asperiores quidem minus cumque explicabo, at consequuntur maiores laboriosam odio autem. Accusamus quasi laudantium dicta libero? Tempora consequatur placeat maiores accusamus esse, blanditiis consequuntur maxime eligendi eaque ullam dolorem facere. Minima, velit fuga? Est aperiam, doloribus ad fuga magnam mollitia adipisci? Adipisci aliquam cum cumque, iste nisi amet sed accusamus animi ab consectetur! Sequi, aut hic quos sint officiis tenetur harum soluta exercitationem, magni veritatis quae natus modi nostrum, deserunt repudiandae. Illum esse numquam quae sint deserunt corporis perspiciatis. Vitae, animi vero, possimus laboriosam, rerum sint culpa accusantium velit officia nostrum cumque sit dolorum in necessitatibus tempore voluptate debitis ratione blanditiis. Numquam assumenda id laboriosam provident libero aliquam at sed quod distinctio in esse tempore saepe, iure dolorum magni! Reiciendis voluptates accusantium officiis distinctio aut dicta animi dolorum laboriosam alias reprehenderit. Ex quos at aperiam odit sapiente dolores iure minus aut, veniam, molestias rerum repellendus ad. Quae ratione maiores porro, alias nostrum laboriosam doloremque accusamus, sequi natus enim modi expedita numquam? Delectus ad expedita, libero, mollitia corrupti eum velit eos laboriosam quis perferendis, illum minus totam hic dolores fuga iure quasi quod quae magni nobis nesciunt vel accusamus! Voluptate, nulla laudantium? Perferendis dolor a doloremque laborum voluptas non quam unde eius odit voluptate magni libero vitae laudantium eaque, fugit laboriosam atque aliquam iste exercitationem illum. Sequi illo molestiae laborum animi recusandae! Est quod voluptatem, asperiores cupiditate consequatur nobis unde, velit nemo mollitia corrupti alias. Soluta incidunt unde similique impedit cupiditate cum, atque asperiores laborum velit culpa? Tempore architecto velit labore ipsa. Corporis illum in nemo cum beatae aspernatur voluptatum quod ipsum placeat, voluptate inventore mollitia quam, facere laudantium, recusandae asperiores eum earum perspiciatis sequi ullam ut assumenda possimus. Sed, tenetur incidunt. Rem quam blanditiis dignissimos cupiditate accusamus deleniti accusantium officia dolorem? Fugit consequatur quaerat at ea! Ipsum amet eius neque quibusdam. Quisquam odit facere fugiat aspernatur et doloribus dolorem minus! Sequi? Dignissimos eius totam optio facere similique earum nulla doloribus nam? Autem voluptates consequuntur, incidunt veritatis veniam quam doloremque magni nobis! Aut cum earum veritatis labore modi necessitatibus facere eos eligendi. Reiciendis fuga nostrum ut quis. Nostrum tempora exercitationem facilis inventore molestiae laudantium architecto quisquam odio fugiat, soluta cumque blanditiis placeat sunt pariatur reprehenderit officia minus dolore possimus? Impedit, eveniet dicta. Quam veniam et qui quo. Officiis quisquam rem sit fugit. Esse, expedita deleniti aut at ex quaerat nobis nihil amet rerum culpa ullam, modi reiciendis consequatur ea et impedit! Exercitationem! Numquam eaque rerum ullam qui architecto adipisci perspiciatis cum veniam tenetur est deserunt sit repellendus nisi nulla libero atque, officiis quisquam beatae eius excepturi, a, quae corporis optio! Numquam, minima? Placeat molestias at maxime sit, voluptates sint optio temporibus consequuntur eius iste incidunt voluptate nemo enim neque numquam. Itaque eveniet ducimus, adipisci tenetur accusantium rem saepe officiis atque doloribus eius. Quidem, fugiat ab quia deleniti accusantium blanditiis nemo in quod, harum, vero quo ducimus alias voluptatum omnis eligendi incidunt? Nostrum ducimus fugit incidunt modi veritatis rerum asperiores facilis, mollitia aspernatur? Culpa, iusto incidunt? Ducimus consectetur quod libero? Soluta voluptatibus natus qui aspernatur blanditiis officia, consequuntur ipsam quo itaque, nemo iusto corrupti, magni voluptate nostrum quia pariatur. Voluptatem natus nostrum laboriosam. Ex aut, perferendis obcaecati placeat exercitationem quaerat rerum ratione laudantium dignissimos tempora consectetur aspernatur dicta, sit eius aperiam aliquam quam! Libero harum possimus esse debitis quod. Atque, deserunt? Ipsum, nesciunt. Asperiores exercitationem omnis ab ut dicta. Quis tenetur deleniti reiciendis vel eaque corrupti eius possimus, excepturi totam quisquam impedit ab sit veritatis dolorum quos nulla commodi, numquam iure, quo aliquam.','proxy-image.jpeg','Proxy','2025-04-08','2025-04-10','Paris',NULL,'France','Trocadéro',1,1,'https://google.de',0,'https://maps.app.goo.gl/EN3r3bVHgeGKoTbk6',NULL,'Concert à Paris','23:00:00','20:00:00');
/*!40000 ALTER TABLE `Event` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `EventType`
--

DROP TABLE IF EXISTS `EventType`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `EventType` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `EventType_name_key` (`name`),
  UNIQUE KEY `EventType_slug_key` (`slug`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `EventType`
--

LOCK TABLES `EventType` WRITE;
/*!40000 ALTER TABLE `EventType` DISABLE KEYS */;
INSERT INTO `EventType` (`id`, `name`, `slug`) VALUES (1,'Performance','performance'),(2,'Pédagogie','pedagogy');
/*!40000 ALTER TABLE `EventType` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `GalleryImage`
--

DROP TABLE IF EXISTS `GalleryImage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `GalleryImage` (
  `id` int NOT NULL AUTO_INCREMENT,
  `description` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `imgAlt` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `imgSrc` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `GalleryImage`
--

LOCK TABLES `GalleryImage` WRITE;
/*!40000 ALTER TABLE `GalleryImage` DISABLE KEYS */;
INSERT INTO `GalleryImage` (`id`, `description`, `imgAlt`, `imgSrc`, `createdAt`) VALUES (1,'Cette vidéo a fait 56 000 vues et a a recueilli des réactions dans le monde entier ! On est trop heureux !!!','HEAR','shofukan-hear.png','2025-02-27 15:48:02.660'),(2,'Pendant un tournage de clip j\'ai craqué et j\'ai demandé à la photographe de me faire une photo LinkedIn !','Seven','clip-sevenProd.jpg','2025-02-27 15:48:02.660'),(3,'Lui, je ne le connais pas mais il a l\'air fun !','Image n°3','proxy-image.jpeg','2025-02-27 15:48:02.660');
/*!40000 ALTER TABLE `GalleryImage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `NewsPost`
--

DROP TABLE IF EXISTS `NewsPost`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `NewsPost` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `teaser` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `thumbnailSrc` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `thumbnailAlt` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `categoryId` int NOT NULL,
  `body` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `readTime` tinyint NOT NULL,
  `thumbnailCaption` tinytext COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `NewsPost_title_key` (`title`),
  KEY `NewsPost_categoryId_fkey` (`categoryId`),
  CONSTRAINT `NewsPost_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `NewsPostCategory` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `NewsPost`
--

LOCK TABLES `NewsPost` WRITE;
/*!40000 ALTER TABLE `NewsPost` DISABLE KEYS */;
INSERT INTO `NewsPost` (`id`, `title`, `teaser`, `thumbnailSrc`, `thumbnailAlt`, `createdAt`, `categoryId`, `body`, `readTime`, `thumbnailCaption`) VALUES (1,'Je pars en tournée !','Ça va être génial !','clip-sevenProd.jpg','SevenProd','2025-02-26 09:53:35.089',1,'Partir en tournée est une expérience à la fois grisante et exigeante, une aventure musicale qui mêle excitation, imprévus et moments de pure euphorie sur scène. Dès l’instant où les dates ont été confirmées, une énergie nouvelle s’est installée en moi : l’anticipation des concerts, la préparation du setlist, les répétitions intensives, tout prenait une dimension particulière. Il ne s’agissait plus seulement de jouer de la musique, mais de construire un véritable voyage sonore qui allait être partagé avec un public différent chaque soir. L’organisation d’une tournée demande une logistique millimétrée, entre les trajets à coordonner, le matériel à vérifier, les balances à prévoir et l’indispensable gestion de l’énergie pour tenir le rythme. Chaque date représente un défi unique, un nouvel espace à apprivoiser, un public à conquérir, une ambiance propre à chaque salle, qu’elle soit intime et feutrée ou immense et électrisante. Ce que j’aime le plus dans la tournée, c’est cette sensation d’être totalement immergé dans la musique, d’échapper à la routine pour vivre pleinement l’instant, avec l’adrénaline qui monte à mesure que l’heure du concert approche. Monter sur scène, sentir l’excitation du public, voir les premières notes s’imprégner dans l’air et s’accorder avec l’énergie collective du groupe, c’est une sensation indescriptible, presque addictive. Mais la tournée, c’est aussi un mode de vie nomade, une suite d’histoires et d’anecdotes qui se tissent au fil des kilomètres parcourus. Les longues heures passées sur la route, entre discussions animées, siestes improvisées et paysages qui défilent à travers la vitre, deviennent des moments de pause avant le tumulte du prochain concert. Il y a ces repas tardifs après un show, dans un petit restaurant encore ouvert, où l’on refait le monde en évoquant les moments forts de la soirée. Il y a ces imprévus, inévitables, qui testent notre capacité d’adaptation : une panne de van en pleine campagne, un ampli qui lâche juste avant le soundcheck, un timing serré entre deux dates. Mais au final, ce sont ces péripéties qui nourrissent l’expérience et qui rendent chaque tournée unique. Au-delà des concerts eux-mêmes, ce que j’attends avec impatience, c’est la connexion avec le public, ces regards échangés, ces instants où la musique transcende les mots et crée une communion intense. Jouer chaque soir dans un lieu différent, devant des visages inconnus qui deviennent des complices le temps d’un morceau, c’est une sensation qui rappelle pourquoi on fait de la musique : pour partager, pour vibrer ensemble, pour créer des souvenirs indélébiles. Lorsque la tournée prendra fin, il restera cette fatigue heureuse, ces souvenirs plein la tête et cette envie irrésistible de repartir sur la route, encore et encore.',2,'HEAR'),(2,'J\'enseigne la basse lors d\'un camp artistique intensif !','J\'ai eu des jeunes vraiment doués !','shofukan-hear.png','HEAR','2025-02-26 09:54:28.729',2,'Enseigner la basse lors d’un camp artistique intensif est une expérience aussi enrichissante qu’exaltante, une occasion unique de transmettre ma passion pour cet instrument tout en accompagnant des musiciens en herbe dans leur progression. Dès mon arrivée sur le site du camp, l’effervescence était palpable : des artistes de tous horizons, des élèves avides d’apprentissage et une atmosphère de créativité bouillonnante. L’idée de partager mes connaissances avec des bassistes de niveaux variés, du débutant curieux au musicien plus avancé cherchant à perfectionner son groove et sa technique, m’enthousiasmait profondément. J’avais soigneusement préparé mon programme pédagogique, structurant mes cours autour de plusieurs axes essentiels : le travail de la main droite pour une attaque précise et expressive, la fluidité du jeu main gauche pour un phrasé naturel, l’importance du placement rythmique et de l’écoute dans un ensemble musical, ainsi que l’exploration de différents styles comme le funk, le jazz, le rock et la pop. Chaque session était une occasion d’expérimenter, d’échanger et d’encourager les élèves à développer leur propre identité musicale, car au-delà des aspects purement techniques, jouer de la basse, c’est aussi apprendre à sentir la musique, à dialoguer avec les autres instruments et à insuffler une véritable dynamique à un morceau. L’un des moments les plus marquants fut l’atelier d’improvisation, où j’ai pu observer mes élèves se libérer progressivement des contraintes théoriques pour s’approprier la basse avec spontanéité et créativité. Voir leur progression au fil des jours, les voir surmonter des blocages techniques, gagner en confiance et prendre plaisir à jouer ensemble fut une immense source de satisfaction. Mais ce camp ne se résumait pas uniquement aux cours : c’était aussi une immersion totale dans un univers artistique foisonnant, ponctué de rencontres inspirantes, de jam sessions endiablées jusqu’à tard dans la nuit et d’échanges stimulants avec d’autres musiciens et pédagogues. Chaque journée était intense, rythmée par des répétitions, des discussions passionnées sur le rôle du bassiste dans un groupe et des moments de pure magie musicale. Cette expérience m’a non seulement permis de perfectionner ma pédagogie, mais elle m’a aussi rappelé à quel point l’enseignement est un puissant moteur d’évolution personnelle. En aidant mes élèves à progresser, j’ai moi-même appris énormément : sur ma propre approche de la basse, sur les différentes manières d’expliquer un concept technique et sur l’importance de s’adapter aux besoins spécifiques de chaque musicien. En quittant le camp, je savais que ces quelques jours avaient laissé une empreinte indélébile, autant pour moi que pour mes élèves. Certains repartiront peut-être avec une motivation décuplée, d’autres auront découvert un nouvel aspect de leur jeu, mais une chose est sûre : l’amour de la musique et le plaisir de jouer ensemble continueront de les accompagner bien au-delà de cette expérience intensive.',4,'HEAR'),(3,'J\'ai acheté une nouvelle basse !','Elle est beaucoup trop belle !','proxy-image.jpeg','Proxy','2025-02-26 09:55:01.000',3,'L’achat d’une nouvelle basse est bien plus qu’un simple investissement matériel ; c’est une décision mûrement réfléchie, un choix guidé par des années d’expérience, des préférences sonores précises et une quête incessante du son parfait. Depuis quelque temps, je ressentais le besoin de renouveler mon instrument, de trouver une basse qui correspondrait mieux à mon évolution musicale, à mes attentes en termes de confort de jeu et à ma recherche d’un son à la fois précis, profond et chaleureux. J’ai passé des semaines, voire des mois, à comparer différents modèles, à explorer les avis de musiciens expérimentés, à écouter des démos et à tester plusieurs instruments en magasin, cherchant cette sensation indescriptible qu’on ressent lorsqu’on trouve enfin la basse qui nous correspond parfaitement. Après de nombreuses hésitations entre plusieurs marques et configurations – manche vissé ou traversant, micros passifs ou actifs, nombre de cordes, type de bois – mon choix s’est arrêté sur un modèle qui a immédiatement capté mon attention, tant par son esthétique que par la richesse de son spectre sonore. Dès les premiers instants, en posant mes mains sur son manche lisse et confortable, j’ai senti une connexion particulière, une sorte d’évidence musicale qui ne trompe pas. La basse réagissait à la moindre nuance de mon jeu, offrant une réponse dynamique et une expressivité hors pair, capable de passer en un instant d’un groove funk incisif à une ligne mélodique ronde et veloutée. Son équilibre parfait, sa finition soignée et la précision de ses micros en faisaient un instrument de choix pour une large variété de styles, s’adaptant aussi bien aux subtilités du jazz qu’à la puissance du rock ou aux rythmiques syncopées du métal. Mais au-delà des caractéristiques techniques, cet achat représente une véritable étape dans mon parcours musical, une avancée qui traduit mon désir de progresser, d’explorer de nouvelles sonorités et de repousser mes limites en tant qu’instrumentiste. Il ne s’agit pas simplement d’un nouvel outil, mais d’un compagnon de route qui m’accompagnera sur scène, en studio et dans mes sessions de composition, enrichissant mon jeu et me permettant d’exprimer pleinement ma créativité. Je me projette déjà en train de l’utiliser lors de mes prochaines performances, d’explorer ses possibilités infinies et de découvrir comment elle influencera mon approche musicale. Il y a quelque chose d’incroyablement motivant dans le fait de se procurer un instrument qui correspond exactement à ce que l’on recherchait, un sentiment d’accomplissement et une source d’inspiration renouvelée qui, j’en suis certain, marquera une nouvelle ère dans mon aventure musicale.',5,'HEAR');
/*!40000 ALTER TABLE `NewsPost` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `NewsPostCategory`
--

DROP TABLE IF EXISTS `NewsPostCategory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `NewsPostCategory` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `NewsPostCategory_name_key` (`name`),
  UNIQUE KEY `NewsPostCategory_slug_key` (`slug`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `NewsPostCategory`
--

LOCK TABLES `NewsPostCategory` WRITE;
/*!40000 ALTER TABLE `NewsPostCategory` DISABLE KEYS */;
INSERT INTO `NewsPostCategory` (`id`, `name`, `slug`) VALUES (1,'Performance','performance'),(2,'Pédagogie','pedagogy'),(3,'Hardware','hardware');
/*!40000 ALTER TABLE `NewsPostCategory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Service`
--

DROP TABLE IF EXISTS `Service`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Service` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` double NOT NULL,
  `unit` tinytext COLLATE utf8mb4_unicode_ci NOT NULL,
  `categoryId` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Service_name_key` (`name`),
  KEY `Service_categoryId_fkey` (`categoryId`),
  CONSTRAINT `Service_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `ServiceCategory` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Service`
--

LOCK TABLES `Service` WRITE;
/*!40000 ALTER TABLE `Service` DISABLE KEYS */;
INSERT INTO `Service` (`id`, `name`, `description`, `price`, `unit`, `categoryId`) VALUES (1,'Concert','Je te fais un bon concert !',250,'concert',1),(2,'Répétition','Je te fais une bonne répétition !',25,'heure',1),(3,'Piste audio','Je te fais une bonne piste audio !',300,'piste',1),(4,'Musique à l\'image','Je te fais une bonne musique à l\'image !',500,'composition',1),(5,'Bed musical','Je te fais un bed musical',250,'composition',1),(6,'Cours particulier','Je te fais un bon cours particulier !',30,'heure',2),(7,'Cours collectif','Je te fais un bon cours collectif !',20,'heure/personne',2);
/*!40000 ALTER TABLE `Service` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ServiceCategory`
--

DROP TABLE IF EXISTS `ServiceCategory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ServiceCategory` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ServiceCategory_name_key` (`name`),
  UNIQUE KEY `ServiceCategory_slug_key` (`slug`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ServiceCategory`
--

LOCK TABLES `ServiceCategory` WRITE;
/*!40000 ALTER TABLE `ServiceCategory` DISABLE KEYS */;
INSERT INTO `ServiceCategory` (`id`, `name`, `slug`) VALUES (1,'Performance','performance'),(2,'Pédagogie','pedagogy');
/*!40000 ALTER TABLE `ServiceCategory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ServiceContext`
--

DROP TABLE IF EXISTS `ServiceContext`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ServiceContext` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ServiceContext_name_key` (`name`),
  UNIQUE KEY `ServiceContext_slug_key` (`slug`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ServiceContext`
--

LOCK TABLES `ServiceContext` WRITE;
/*!40000 ALTER TABLE `ServiceContext` DISABLE KEYS */;
INSERT INTO `ServiceContext` (`id`, `name`, `slug`) VALUES (1,'Bassiste claviériste','bassist-keyboardist'),(2,'Composition','composition'),(3,'Basse','bass'),(4,'Solfège','solfege');
/*!40000 ALTER TABLE `ServiceContext` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ServicesOnContexts`
--

DROP TABLE IF EXISTS `ServicesOnContexts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ServicesOnContexts` (
  `serviceId` int NOT NULL,
  `serviceContextId` int NOT NULL,
  PRIMARY KEY (`serviceId`,`serviceContextId`),
  KEY `ServicesOnContexts_serviceContextId_fkey` (`serviceContextId`),
  CONSTRAINT `ServicesOnContexts_serviceContextId_fkey` FOREIGN KEY (`serviceContextId`) REFERENCES `ServiceContext` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `ServicesOnContexts_serviceId_fkey` FOREIGN KEY (`serviceId`) REFERENCES `Service` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ServicesOnContexts`
--

LOCK TABLES `ServicesOnContexts` WRITE;
/*!40000 ALTER TABLE `ServicesOnContexts` DISABLE KEYS */;
INSERT INTO `ServicesOnContexts` (`serviceId`, `serviceContextId`) VALUES (1,1),(2,1),(3,1),(4,2),(5,2),(6,3),(7,3),(6,4);
/*!40000 ALTER TABLE `ServicesOnContexts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SetupItem`
--

DROP TABLE IF EXISTS `SetupItem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `SetupItem` (
  `id` int NOT NULL AUTO_INCREMENT,
  `thumbnailSrc` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `thumbnailAlt` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `constructor` tinytext COLLATE utf8mb4_unicode_ci NOT NULL,
  `series` tinytext COLLATE utf8mb4_unicode_ci,
  `model` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `externalLink` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `setupItemTypeId` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `SetupItem_model_key` (`model`),
  UNIQUE KEY `SetupItem_externalLink_key` (`externalLink`),
  KEY `SetupItem_setupItemTypeId_fkey` (`setupItemTypeId`),
  CONSTRAINT `SetupItem_setupItemTypeId_fkey` FOREIGN KEY (`setupItemTypeId`) REFERENCES `SetupItemType` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SetupItem`
--

LOCK TABLES `SetupItem` WRITE;
/*!40000 ALTER TABLE `SetupItem` DISABLE KEYS */;
INSERT INTO `SetupItem` (`id`, `thumbnailSrc`, `thumbnailAlt`, `constructor`, `series`, `model`, `externalLink`, `setupItemTypeId`) VALUES (1,'hbz-2005.jpg','HBZ-2005','Harley Benton','','HBZ-2005','https://harleybenton.com/product/hbz-2005/',1),(2,'jupiter-50.jpg','Jupiter-50','Roland','Jupiter','Jupiter-50','https://www.roland.com/fr/products/jupiter-50/',1),(3,'launchkey-49.webp','Launchkey MK3 49','Novation','Launchkey','Launchkey MK3 49','https://novationmusic.com/products/launchkey-49-mk3',1),(4,'electric-guitar.jpg','HB-25 VS','Harley Benton','VS','HB-35','https://harleybenton.com/product/hb-35-vs/',1),(5,'logic-pro-x.png','Logic pro X','Apple','','Logix Pro X','https://www.apple.com/fr/logic-pro/',2),(6,'obs.png','OBS','OBS',NULL,'OBS','https://obsproject.com/',2),(7,'benQ-PD2705U.jpg','PD2705U','BenQ','PD','PD2705U','https://www.benq.eu/fr-fr/monitor/professional/pd2705u.html',1),(8,'koorui-1800r.jpg','1800r','Kooruiu',NULL,'1800r','https://fr.koorui.net/productinfo4.html',1),(9,'premiere-pro.svg','Premiere pro','Adobe',NULL,'Premiere Pro','https://www.adobe.com/fr/products/premiere.html',2);
/*!40000 ALTER TABLE `SetupItem` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SetupItemPlace`
--

DROP TABLE IF EXISTS `SetupItemPlace`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `SetupItemPlace` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `SetupItemPlace_name_key` (`name`),
  UNIQUE KEY `SetupItemPlace_slug_key` (`slug`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SetupItemPlace`
--

LOCK TABLES `SetupItemPlace` WRITE;
/*!40000 ALTER TABLE `SetupItemPlace` DISABLE KEYS */;
INSERT INTO `SetupItemPlace` (`id`, `name`, `slug`) VALUES (1,'Scène','scene'),(2,'Home-studio','home-studio');
/*!40000 ALTER TABLE `SetupItemPlace` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SetupItemRole`
--

DROP TABLE IF EXISTS `SetupItemRole`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `SetupItemRole` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `SetupItemRole_name_key` (`name`),
  UNIQUE KEY `SetupItemRole_slug_key` (`slug`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SetupItemRole`
--

LOCK TABLES `SetupItemRole` WRITE;
/*!40000 ALTER TABLE `SetupItemRole` DISABLE KEYS */;
INSERT INTO `SetupItemRole` (`id`, `name`, `slug`) VALUES (1,'Bassiste claviériste','bassist-keyboardist'),(2,'Bassiste','bassist');
/*!40000 ALTER TABLE `SetupItemRole` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SetupItemsOnPlaces`
--

DROP TABLE IF EXISTS `SetupItemsOnPlaces`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `SetupItemsOnPlaces` (
  `setupItemId` int NOT NULL,
  `setupItemPlaceId` int NOT NULL,
  PRIMARY KEY (`setupItemId`,`setupItemPlaceId`),
  KEY `SetupItemsOnPlaces_setupItemPlaceId_fkey` (`setupItemPlaceId`),
  CONSTRAINT `SetupItemsOnPlaces_setupItemId_fkey` FOREIGN KEY (`setupItemId`) REFERENCES `SetupItem` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `SetupItemsOnPlaces_setupItemPlaceId_fkey` FOREIGN KEY (`setupItemPlaceId`) REFERENCES `SetupItemPlace` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SetupItemsOnPlaces`
--

LOCK TABLES `SetupItemsOnPlaces` WRITE;
/*!40000 ALTER TABLE `SetupItemsOnPlaces` DISABLE KEYS */;
INSERT INTO `SetupItemsOnPlaces` (`setupItemId`, `setupItemPlaceId`) VALUES (1,1),(2,1),(3,1),(1,2),(2,2),(3,2),(4,2),(5,2),(6,2),(7,2),(8,2),(9,2);
/*!40000 ALTER TABLE `SetupItemsOnPlaces` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SetupItemsOnRoles`
--

DROP TABLE IF EXISTS `SetupItemsOnRoles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `SetupItemsOnRoles` (
  `setupItemId` int NOT NULL,
  `setupItemRoleId` int NOT NULL,
  PRIMARY KEY (`setupItemId`,`setupItemRoleId`),
  KEY `SetupItemsOnRoles_setupItemRoleId_fkey` (`setupItemRoleId`),
  CONSTRAINT `SetupItemsOnRoles_setupItemId_fkey` FOREIGN KEY (`setupItemId`) REFERENCES `SetupItem` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `SetupItemsOnRoles_setupItemRoleId_fkey` FOREIGN KEY (`setupItemRoleId`) REFERENCES `SetupItemRole` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SetupItemsOnRoles`
--

LOCK TABLES `SetupItemsOnRoles` WRITE;
/*!40000 ALTER TABLE `SetupItemsOnRoles` DISABLE KEYS */;
INSERT INTO `SetupItemsOnRoles` (`setupItemId`, `setupItemRoleId`) VALUES (1,1),(2,1),(3,1),(4,1),(5,1),(6,1),(7,1),(8,1),(9,1),(1,2);
/*!40000 ALTER TABLE `SetupItemsOnRoles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SetupItemType`
--

DROP TABLE IF EXISTS `SetupItemType`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `SetupItemType` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `SetupItemType_name_key` (`name`),
  UNIQUE KEY `SetupItemType_slug_key` (`slug`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SetupItemType`
--

LOCK TABLES `SetupItemType` WRITE;
/*!40000 ALTER TABLE `SetupItemType` DISABLE KEYS */;
INSERT INTO `SetupItemType` (`id`, `name`, `slug`) VALUES (1,'Hardware','hardware'),(2,'Software','software');
/*!40000 ALTER TABLE `SetupItemType` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Video`
--

DROP TABLE IF EXISTS `Video`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Video` (
  `id` int NOT NULL AUTO_INCREMENT,
  `thumbnailSrc` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `thumbnailAlt` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `externalLink` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Video_externalLink_key` (`externalLink`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Video`
--

LOCK TABLES `Video` WRITE;
/*!40000 ALTER TABLE `Video` DISABLE KEYS */;
INSERT INTO `Video` (`id`, `thumbnailSrc`, `thumbnailAlt`, `title`, `externalLink`) VALUES (1,'shofukan-hear.png','HEAR','Shofukan - Snarky Puppy (arrangement)','https://youtu.be/gAH4KEqPTzc?si=aDqnKSVQzQKc5geK');
/*!40000 ALTER TABLE `Video` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-03-25 21:54:36
