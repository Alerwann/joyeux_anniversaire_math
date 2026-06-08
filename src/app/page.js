import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header className="relative w-full aspect-1500/92 ">
        <Image
          src={"/header.png"}
          alt="acc"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </header>
      <h2 className="text-center text-5xl font-extrabold">
        Anniversaires du 8 Juin
      </h2>
      <div className="m-15 grid grid-cols-2 md:grid-cols-5 gap-2 ">
        <div className="tile__item">
          <a className="tile" href="./joyeuxAnniv">
            <div className="">
              <img
                src="/math.jpeg"
                srcSet="/math-190.png 190w, /math-250.png 250w, /math-300.png 300w"
                sizes="(max-width: 767px) 50vw, (max-width: 1023px) 20vw, 190px"
                width="190"
                height="190"
                alt="Math Meyer"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="type-16-18-small"> Mathieu Meyer</p>

            <p className="tile__description type-14-16">
              Entrepreneur et Ami de longue date
            </p>

            <p className="tile__star-ranking type-16-1">
              <span>40</span>
            </p>
          </a>
        </div>
        <div className="tile__item">
          <a
            className="tile"
            href="https://fr.famousbirthdays.com/people/charlotte-lawrence.html"
          >
            <div className="tile__picture">
              <img
                src="https://www.famousbirthdays.com/thumbnails/lawrence-charlotte-medium.jpg"
                srcSet="https://www.famousbirthdays.com/thumbnails/lawrence-charlotte-medium.jpg 190w, https://www.famousbirthdays.com/thumbnails/lawrence-charlotte-large.jpg 250w, https://www.famousbirthdays.com/faces/lawrence-charlotte-image.jpg 300w"
                sizes="(max-width: 767px) 50vw, (max-width: 1023px) 20vw, 190px"
                width="190"
                height="190"
                alt="Charlotte Lawrence"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="type-16-18-small"> Charlotte Lawrence, 25</p>

            <p className="tile__description type-14-16">Chanteur Pop</p>

            <p className="tile__star-ranking type-16-1">
              <span>21</span>
            </p>
          </a>
        </div>

        <div className="tile__item">
          <a
            className="tile"
            href="https://fr.famousbirthdays.com/people/francesca-capaldi.html"
          >
            <div className="tile__picture">
              <img
                src="https://www.famousbirthdays.com/thumbnails/capaldi-francesca-medium.jpg"
                srcSet="https://www.famousbirthdays.com/thumbnails/capaldi-francesca-medium.jpg 190w, https://www.famousbirthdays.com/thumbnails/capaldi-francesca-large.jpg 250w, https://www.famousbirthdays.com/faces/capaldi-francesca-image.jpg 300w"
                sizes="(max-width: 767px) 50vw, (max-width: 1023px) 20vw, 190px"
                width="190"
                height="190"
                alt="Francesca Capaldi"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="type-16-18-small"> Francesca Capaldi, 21</p>

            <p className="tile__description type-14-16">
              Comédienne de Télévision
            </p>

            <p className="tile__star-ranking type-16-1">
              <span>22</span>
            </p>
          </a>
        </div>

        <div className="tile__item">
          <a
            className="tile"
            href="https://fr.famousbirthdays.com/people/robert-lopez-youtubestar.html"
          >
            <div className="tile__picture">
              <img
                src="https://www.famousbirthdays.com/thumbnails/lopez-robert-youtubestar-medium.jpg"
                srcSet="https://www.famousbirthdays.com/thumbnails/lopez-robert-youtubestar-medium.jpg 190w, https://www.famousbirthdays.com/thumbnails/lopez-robert-youtubestar-large.jpg 250w, https://www.famousbirthdays.com/faces/lopez-robert-youtubestar-image.jpg 300w"
                sizes="(max-width: 767px) 50vw, (max-width: 1023px) 20vw, 190px"
                width="190"
                height="190"
                alt="Rob Lopez"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="type-16-18-small"> Rob Lopez, 29</p>

            <p className="tile__description type-14-16">Star YouTube</p>
          </a>
        </div>

        <div className="tile__item">
          <a
            className="tile"
            href="https://fr.famousbirthdays.com/people/hayes-grier.html"
          >
            <div className="tile__picture">
              <img
                src="https://www.famousbirthdays.com/thumbnails/grier-hayes-medium.jpg"
                srcSet="https://www.famousbirthdays.com/thumbnails/grier-hayes-medium.jpg 190w, https://www.famousbirthdays.com/thumbnails/grier-hayes-large.jpg 250w, https://www.famousbirthdays.com/faces/grier-hayes-image.jpg 300w"
                sizes="(max-width: 767px) 50vw, (max-width: 1023px) 20vw, 190px"
                width="190"
                height="190"
                alt="Hayes Grier"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="type-16-18-small"> Hayes Grier, 25</p>

            <p className="tile__description type-14-16">Star d'Instagram</p>

            <p className="tile__star-ranking type-16-1">
              <span>24</span>
            </p>
          </a>
        </div>

        <div className="tile__item">
          <a
            className="tile"
            href="https://fr.famousbirthdays.com/people/clayton-bush.html"
          >
            <div className="tile__picture">
              <img
                src="https://www.famousbirthdays.com/thumbnails/bush-clayton-medium.jpg"
                srcSet="https://www.famousbirthdays.com/thumbnails/bush-clayton-medium.jpg 190w, https://www.famousbirthdays.com/thumbnails/bush-clayton-large.jpg 250w, https://www.famousbirthdays.com/faces/bush-clayton-image.jpg 300w"
                sizes="(max-width: 767px) 50vw, (max-width: 1023px) 20vw, 190px"
                width="190"
                height="190"
                alt="Clayton Bush"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="type-16-18-small"> Clayton Bush, 25</p>

            <p className="tile__description type-14-16">Star d'Instagram</p>

            <p className="tile__star-ranking type-16-1">
              <span>25</span>
            </p>
          </a>
        </div>

        <div className="tile__item">
          <a
            className="tile"
            href="https://fr.famousbirthdays.com/people/anthony-beauvillier.html"
          >
            <div className="tile__picture">
              <img
                src="https://www.famousbirthdays.com/thumbnails/beauvillier-anthony-medium.jpg"
                srcSet="https://www.famousbirthdays.com/thumbnails/beauvillier-anthony-medium.jpg 190w, https://www.famousbirthdays.com/thumbnails/beauvillier-anthony-large.jpg 250w, https://www.famousbirthdays.com/faces/beauvillier-anthony-image.jpg 300w"
                sizes="(max-width: 767px) 50vw, (max-width: 1023px) 20vw, 190px"
                width="190"
                height="190"
                alt="Anthony Beauvillier"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="type-16-18-small"> Anthony Beauvillier, 28</p>

            <p className="tile__description type-14-16">Joueur de Hockey</p>

            <p className="tile__star-ranking type-16-1">
              <span>26</span>
            </p>
          </a>
        </div>

        <div className="tile__item">
          <a
            className="tile"
            href="https://fr.famousbirthdays.com/people/luana-kazaki.html"
          >
            <div className="tile__picture">
              <img
                src="https://www.famousbirthdays.com/faces/large-default.jpg"
                srcSet="https://www.famousbirthdays.com/faces/large-default.jpg 190w, https://www.famousbirthdays.com/faces/large-default.jpg 250w, https://www.famousbirthdays.com/faces/large-default.jpg 300w"
                sizes="(max-width: 767px) 50vw, (max-width: 1023px) 20vw, 190px"
                width="190"
                height="190"
                alt="Luana Kazaki"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="type-16-18-small"> Luana Kazaki, 29</p>

            <p className="tile__description type-14-16">Star TikTok</p>

            <p className="tile__star-ranking type-16-1">
              <span>27</span>
            </p>
          </a>
        </div>

        <div className="tile__item">
          <a
            className="tile"
            href="https://fr.famousbirthdays.com/people/eden-zaken.html"
          >
            <div className="tile__picture">
              <img
                src="https://www.famousbirthdays.com/thumbnails/zaken-eden-medium.jpg"
                srcSet="https://www.famousbirthdays.com/thumbnails/zaken-eden-medium.jpg 190w, https://www.famousbirthdays.com/thumbnails/zaken-eden-large.jpg 250w, https://www.famousbirthdays.com/faces/zaken-eden-image.jpg 300w"
                sizes="(max-width: 767px) 50vw, (max-width: 1023px) 20vw, 190px"
                width="190"
                height="190"
                alt="Eden Ben Zaken"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="type-16-18-small"> Eden Ben Zaken, 31</p>

            <p className="tile__description type-14-16">Chanteur Pop</p>

            <p className="tile__star-ranking type-16-1">
              <span>28</span>
            </p>
          </a>
        </div>

        <div className="tile__item">
          <a
            className="tile"
            href="https://fr.famousbirthdays.com/people/luan-alencar.html"
          >
            <div className="tile__picture">
              <img
                src="https://www.famousbirthdays.com/thumbnails/alencar-luan-medium.jpg"
                srcSet="https://www.famousbirthdays.com/thumbnails/alencar-luan-medium.jpg 190w, https://www.famousbirthdays.com/thumbnails/alencar-luan-large.jpg 250w, https://www.famousbirthdays.com/faces/alencar-luan-image.jpg 300w"
                sizes="(max-width: 767px) 50vw, (max-width: 1023px) 20vw, 190px"
                width="190"
                height="190"
                alt="Luan Alencar"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="type-16-18-small"> Luan Alencar, 20</p>

            <p className="tile__description type-14-16">Star d'Instagram</p>

            <p className="tile__star-ranking type-16-1">
              <span>29</span>
            </p>
          </a>
        </div>

        <div className="tile__item">
          <a
            className="tile"
            href="https://fr.famousbirthdays.com/people/coralie-balmy.html"
          >
            <div className="tile__picture">
              <img
                src="https://www.famousbirthdays.com/thumbnails/balmy-coralie-medium.jpg"
                srcSet="https://www.famousbirthdays.com/thumbnails/balmy-coralie-medium.jpg 190w, https://www.famousbirthdays.com/thumbnails/balmy-coralie-large.jpg 250w, https://www.famousbirthdays.com/faces/balmy-coralie-image.jpg 300w"
                sizes="(max-width: 767px) 50vw, (max-width: 1023px) 20vw, 190px"
                width="190"
                height="190"
                alt="Coralie Balmy"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="type-16-18-small"> Coralie Balmy, 38</p>

            <p className="tile__description type-14-16">Nageur(se)</p>

            <p className="tile__star-ranking type-16-1">
              <span>30</span>
            </p>
          </a>
        </div>

        <div className="tile__item">
          <a
            className="tile"
            href="https://fr.famousbirthdays.com/people/zoe-land2.html"
          >
            <div className="tile__picture">
              <img
                src="https://www.famousbirthdays.com/thumbnails/zoe-land2-medium.jpg"
                srcSet="https://www.famousbirthdays.com/thumbnails/zoe-land2-medium.jpg 190w, https://www.famousbirthdays.com/thumbnails/zoe-land2-large.jpg 250w, https://www.famousbirthdays.com/faces/zoe-land2-image.jpg 300w"
                sizes="(max-width: 767px) 50vw, (max-width: 1023px) 20vw, 190px"
                width="190"
                height="190"
                alt="zoe.land2"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="type-16-18-small"> zoe.land2, 23</p>

            <p className="tile__description type-14-16">Star TikTok</p>

            <p className="tile__star-ranking type-16-1">
              <span>31</span>
            </p>
          </a>
        </div>

        <div className="tile__item">
          <a
            className="tile"
            href="https://fr.famousbirthdays.com/people/niko-mcbride.html"
          >
            <div className="tile__picture">
              <img
                src="https://www.famousbirthdays.com/faces/large-default.jpg"
                srcSet="https://www.famousbirthdays.com/faces/large-default.jpg 190w, https://www.famousbirthdays.com/faces/large-default.jpg 250w, https://www.famousbirthdays.com/faces/large-default.jpg 300w"
                sizes="(max-width: 767px) 50vw, (max-width: 1023px) 20vw, 190px"
                width="190"
                height="190"
                alt="Niko Bear McBride"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="type-16-18-small"> Niko Bear McBride, 7</p>

            <p className="tile__description type-14-16">Star YouTube</p>

            <p className="tile__star-ranking type-16-1">
              <span>32</span>
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
