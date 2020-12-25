import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Product } from "./Product";
import { ProductType } from "./ProductType";

@Entity('categories')
export class Category {
  @PrimaryGeneratedColumn('increment')
  id!: number;

  @Column()
  name!: string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;

  @OneToMany(() => Product, (product_type) => product_type.category)
  @JoinColumn({name: 'category_id'})
  products!: Array<Product>;

  @OneToMany(() => ProductType, (product_type) => product_type.category)
  @JoinColumn({name: 'category_id'})
  product_types!: Array<ProductType>;
}