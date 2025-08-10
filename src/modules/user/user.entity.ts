import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Role } from '../../shared/constants/role.enum';
import { ApiProperty } from '@nestjs/swagger';

@Entity('users')
export class User {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column('varchar')
  name: string;

  @ApiProperty()
  @Column('varchar', { unique: true })
  email: string;

  @ApiProperty()
  @Column('varchar')
  password: string;

  @ApiProperty()
  @Column('timestamptz', { default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @ApiProperty()
  @Column('timestamptz', { default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @ApiProperty()
  @Column({ type: 'enum', enum: Role, default: Role.Player })
  role: Role;

  @BeforeInsert()
  async setPassword() {
    if (this.password) {
      const salt = await bcrypt.genSalt();
      this.password = await bcrypt.hash(this.password, salt);
    }
  }
}
