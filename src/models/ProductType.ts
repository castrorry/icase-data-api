import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Category } from "./Category";
import { Product } from "./Product";

@Entity('product_types')
export class ProductType {
  @PrimaryGeneratedColumn('increment')
  id!: number;

  @Column()
  name!: string;

  @Column()
  category_id!: number;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;

  @OneToMany(() => Product, (product) => product.product_type_id)
  @JoinColumn({name: 'product_type_id'})
  products!: Array<Product>;

  @ManyToOne(() => Category, (category) => category.product_types)
  @JoinColumn({ name: 'category_id' })
  category!: Category;
}