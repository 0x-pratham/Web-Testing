import { aiMlService } from "./ai-ml";
import { softwareService } from "./software";
import { cloudService } from "./cloud";
import { cyberSecurityService } from "./cybersecurity";
import { devopsService } from "./devops";
import { gameDevService } from "./game-development";
import { arVrService } from "./ar-vr";
import { designService } from "./design";
import { trainingService } from "./training";
import { itServicesService } from "./it-services";
import { tenderService } from "./tenders";
import { testingService } from "./testing";

export const serviceDetails: Record<string, any> = {
  "ai-ml": aiMlService,
  "software": softwareService,
  "cloud": cloudService,
  "cybersecurity": cyberSecurityService,
  "devops": devopsService,
  "game-development": gameDevService,
  "ar-vr": arVrService,
  "design": designService,
  "training": trainingService,
  "it-services": itServicesService,
  "tenders": tenderService,
  "testing": testingService,
};