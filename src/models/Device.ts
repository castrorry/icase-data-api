import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { DeviceBrand } from "./DeviceBrand";

@Entity('devices')
export class Device {
  @PrimaryGeneratedColumn('increment')
  id!: number;

  @Column()
  name!: string;

  @Column()
  brand_id!: number;

  @Column()
  model!: string;

  @Column()
  year!: string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;

  @ManyToOne(() => DeviceBrand, (device_brand) => device_brand.devices)
  @JoinColumn({name: 'brand_id'})
  brand!: DeviceBrand;
}