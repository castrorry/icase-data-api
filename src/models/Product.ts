import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Category } from "./Category";
import { ProductType } from "./ProductType";

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn('increment')
  id!: number;

  @Column()
  name!: string;

  @Column()
  category_id!: number;

  @Column()
  product_type_id!: number;

  @Column()
  count!: number;

  @Column()
  price!: number;

  @Column()
  stock_price!: number;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;

  @ManyToOne(() => Category, (category) => category.products)
  @JoinColumn({ name: 'category_id' })
  category!: Category;

  @ManyToOne(() => ProductType, (product_type) => product_type.products)
  @JoinColumn({ name: 'product_type_id' })
  product_type!: ProductType;
}