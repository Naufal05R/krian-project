import { styles } from "../styles";

const About = () => {
  return (
    <section className="relative mx-auto w-full mt-5">
      <div className="-z-30 absolute w-60 h-60 bg-about-ornament right-[-147.5px] top-[-169.96px]" />
      <div className="-z-30 absolute w-60 h-60 bg-about-ornament left-[-152.5px] top-[210.04px]" />
      <div
        className={`${styles.paddingX} mx-auto mt-6 flex max-w-[70%] flex-col items-start`}
      >
        <div>
          <h1 className={`${styles.heroHeadText} w-full`}>Tentang Kami</h1>
        </div>
        <div className="max-w-[240px]">
          <p className={`${styles.heroParagraph} mt-3`}>
            SMP Alam Al-Izzah memadukan tiga kurikulum, yaitu Kurikulum Sekolah
            Alam, Kurikulum Kemendikbud, dan Kurikulum Pesantren. Program
            unggulan kami mencakup pembelajaran akhlak, logika berpikir,
            kepemimpinan, kewirausahaan, serta tahfidz dan tahsin bersyahadah.
          </p>
          <p className={`${styles.heroParagraph} mt-3`}>
            Dengan kelulusan standar yang mencakup hafalan Al-Quran bersyahadah,
            kemampuan berbahasa Arab dan Inggris yang aktif, serta jiwa mandiri,
            kepemimpinan, dan kewirausahaan, siswa juga berkesempatan
            mendapatkan beasiswa.
          </p>
        </div>
      </div>
      <div
        className={`${styles.paddingX} mx-auto mt-6 flex max-w-7xl flex-col items-end`}
      >
        <div className="w-[280px] h-[253px] relative">
          <div className="flex w-full h-full absolute bg-[url('/src/assets/frame/frame1.png')]" />
          <div className="flex w-full h-full absolute bg-[url('/src/assets/frame/frame2.png')]" />
          <div className="flex w-full h-full absolute bg-[url('/src/assets/frame/frame3.png')]" />
          <div className="flex w-full h-full absolute bg-[url('/src/assets/frame/frame4.png')]" />
        </div>
      </div>
    </section>
  );
};

export default About;
