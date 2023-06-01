import Button from "@mui/material/Button";
import { styles } from "../styles";

const Shared = () => {
  return (
    <section className="relative mx-auto mt-5 h-[425px] w-full overflow-y-clip">
      <div
        className={`${styles.paddingX} absolute mx-auto mt-6 flex h-full w-full max-w-7xl flex-col items-start`}
      >
        <div className="relative h-full w-full">
          <div className="absolute flex h-full w-full bg-[url('/src/assets/users/user1.png')]" />
          <div className="absolute flex h-full w-full bg-[url('/src/assets/users/user2.png')]" />
          <div className="absolute flex h-full w-full bg-[url('/src/assets/users/user3.png')]" />
          <div className="absolute flex h-full w-full bg-[url('/src/assets/users/user4.png')]" />
          <div className="absolute flex h-full w-full bg-[url('/src/assets/users/user5.png')]" />
          <div className="absolute flex h-full w-full bg-[url('/src/assets/users/user6.png')]" />
          <div className="absolute flex h-full w-full bg-[url('/src/assets/users/user7.png')]" />
          <div className="absolute flex h-full w-full bg-[url('/src/assets/users/user8.png')]" />
        </div>
      </div>
      <div
        className={`${styles.paddingX} mx-auto mt-6 flex h-full w-full max-w-7xl flex-col items-start`}
      >
        <div className="grid h-full w-full place-items-center">
          <div className="mx-auto flex w-full flex-col gap-y-3 items-center text-center text-[12px] font-bold">
            <h1 className={`${styles.sectionHeadText} w-full`}>
              Daftar <span className="hidden xs:inline">Al-Izzah</span> Sekarang
            </h1>
            <Button variant="contained" href="#contained-buttons">
              PPDB 2023/2024
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shared;
