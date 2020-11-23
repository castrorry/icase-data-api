import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Device } from "./Device";

@Entity('device_brands')
export class DeviceBrand {
  @PrimaryGeneratedColumn('increment')
  id!: number;

  @Column()
  name!: string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;

  @OneToMany(() => Device, (device) => device.brand)
  @JoinColumn({name: 'brand_id'})
  devices!: Array<Device>;
}