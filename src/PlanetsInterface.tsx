export interface PlanetsInterface {
  name: string;
  overview: {
    content: string;
    source: string;
  };
  structure: {
    content: string;
    source: string;
  };
  geology: {
    content: string;
    source: string;
  };

  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
  images: {
    [key: string]: any;
    internal: string;
    geology: string;
  };
  color: string;
  desktopImgWidth: string;
  tabletImgWidth: string;
  mobileImgWidth: string;
}
