import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CampaignModuleBase } from "./base/campaign.module.base";
import { CampaignService } from "./campaign.service";
import { CampaignController } from "./campaign.controller";
import { CampaignResolver } from "./campaign.resolver";

@Module({
  imports: [CampaignModuleBase, forwardRef(() => AuthModule)],
  controllers: [CampaignController],
  providers: [CampaignService, CampaignResolver],
  exports: [CampaignService],
})
export class CampaignModule {}
