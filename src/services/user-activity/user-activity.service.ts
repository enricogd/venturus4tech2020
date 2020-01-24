import { Injectable } from '@nestjs/common';

@Injectable()
export class UserActivityService {
    uploadImage(userId: string, fileName: string, description: string){
        return 'Upload'
    }
}
