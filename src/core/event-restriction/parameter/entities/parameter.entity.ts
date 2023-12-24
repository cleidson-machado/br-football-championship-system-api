import {
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ schema: 'DIP', name: 'parameters' })
export class Parameter {
  @PrimaryGeneratedColumn('uuid')
  idParameter: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  description: string;

  @Column({ nullable: false })
  onAction: string; //UPDATE, CREATE OR DELETE

  @Column({ nullable: true })
  isActive?: number; //BOOLEAN

  @Column({ nullable: true })
  itIsTemporary?: number; //BOOLEAN

  @Column({ nullable: true })
  dueDaysNumber?: number; //IF IS TEMP HOW MANY DAY TO USE IT.. em relação a data de atualização??

  @Column({ nullable: true })
  pointValue?: number; //IF IS TEMP WHAT GONNA BE YOUR VALUE

  @Column({ nullable: true })
  applyToAllWithTheSameType?: string; //BOOLEAN.. DEFAULT FALSE!

  @Column({ nullable: true })
  mathAction?: string; // ADD, SUBTRACT, MUTIPlY OR TO DIVIDE

  @CreateDateColumn({ name: 'CREATED_AT' })
  created_at?: Date;

  @UpdateDateColumn({ name: 'UPDATED_AT' })
  updated_at?: Date;

  @Column({ nullable: false })
  entityIdentificatorId: string; //USE THE PK FROM A ENTITY AND THE NAME OS THIS ENTITY FROM THE CODE!
}
