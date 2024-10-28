import { Module } from '@nestjs/common';
import { HelloModule } from './hello/hello.module';  // Đã có từ task1
import { UserModule } from './user/user.module';      // Thêm UserModule

@Module({
  imports: [HelloModule, UserModule],  // Kết hợp cả hai module
})
export class AppModule {}
