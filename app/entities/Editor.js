import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
class Editor {
  @PrimaryGeneratedColumn()
  id = null;

  @Column('varchar')
  language = '';

  @Column('varchar')
  name = '';

  constructor(attrs = {}) {
    this.language = attrs.language;
    this.name = attrs.name;
  }
}

export default Editor;
