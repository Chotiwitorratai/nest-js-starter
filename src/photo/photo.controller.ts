import { Controller, Get, Post } from '@nestjs/common';
import { PhotoService } from './photo/photo.service';

@Controller('photo')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}

  // @Get()
}
