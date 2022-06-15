import { Module } from "@nestjs/common";
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { pstation, PStModel } from "./auth.model";

@Module({
  imports: [MongooseModule.forFeature([{name: pstation.name, schema: PStModel }])],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}