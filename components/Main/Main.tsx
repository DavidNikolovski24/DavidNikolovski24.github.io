import { HomePageBannerText, IProjectData, ProjectsData } from '@/db';
import TypingTextAnimation from '../HeadingAnimates/TypingTextAnimation';
import ProjectSection from '../ProjectSection/ProjectSection';
import ProjectTab from '../Tabs/ProjectTab';

const Main = ({
  activeTab,
  clickPortfolioTab,
}: {
  activeTab: string;
  clickPortfolioTab: (project: IProjectData) => void;
}) => {
  return (
    <main className="flex flex-col lg:flex-row ml-0 lg:ml-12 gap-11 box-border max-w-full flex-grow mt-5 ">
      <div className="w-full lg:w-2/3  flex-grow overflow-hidden  ">
        <div className={activeTab === 'Welcome' ? 'slide-in ' : 'hidden'}>
          <TypingTextAnimation heading="Welcome." />
          <div
            className="flex flex-col gap-3 border-l border-color-180  pl-5"
            dangerouslySetInnerHTML={{ __html: HomePageBannerText }}
          />
        </div>
        {ProjectsData.map((project) => {
          return (
            <div
              className={
                activeTab === project.name ? `slide-in mt-11 ` : ' hidden '
              }
              key={project.name}
            >
              <ProjectSection {...project} />
            </div>
          );
        })}
      </div>

      <div className="w-full lg:w-1/3 flex-grow-0">
        <h2 className="text-2xl mb-4 red dark:blue font-light tracking-wide">
          Projects
        </h2>
        <div className="custom-borderProject p-8 flex flex-col items-start gap-6">
          {ProjectsData.map((project) => (
            <ProjectTab
              key={project.name}
              project={project}
              clickFnc={clickPortfolioTab}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Main;
