import AnimatedCursorCustom from "@/components/AnimatedCursorCustom";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Main from "@/components/Main/Main";

export default function Home() {
  return (
    <div className="flex items-center justify-center  min-h-screen w-screen relative bg-white dark:bg-black dark:text-white text-black  duration-500 p-0 md:p-5 lg:p-0">
      <AnimatedCursorCustom />
      <div
        className="flex flex-col justify-between 
          w-screen xl:w-11/12 2xl:w-8/12
           min-h-screen xl:min-h-screen90 2xl:min-h-screen75
          my-auto mx-auto 
          p-11 custom-border bg-white dark:bg-black duration-500"
      >
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}
