/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { RecipeModule } from './recipe/recipe.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UserModule,
    RecipeModule,
    MongooseModule.forRoot('mongodb://localhost:27017/steprecipes_db'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
