import { AppDataSource } from "../data-source";
import { Hero } from "../models/interfaces/HeroInterface";

/**
 * Le role du service est d'aller chercher les données,
 * pour les mettre à disposition de controlleur.
 */
export class HeroService {
  getAllHeros(): Promise<Hero[]> {
    return AppDataSource.query(`SELECT * FROM hero;`);
  }

  getOneHeroById(id: number): Promise<Hero[]> {
    return AppDataSource.query(`SELECT hero FROM hero WHERE id = ${id}`);
  }

  createNewHero(newHero: Hero): Promise<Hero[]> {
    return AppDataSource.query(
      `insert into hero (name, power, life)
      values '${newHero.name}',${newHero.power},${newHero.life}`
    );
  }

  updateOneHero(id: number, changes: Hero): Promise<any> {
    return AppDataSource.query(`UPDATE hero
    SET name = '${changes.name}', power = ${changes.power}, life = ${changes.life}
    WHERE id = ${id}`);
  }

  deleteOneHero(id: number): Promise<any> {
    return AppDataSource.query(`DELETE hero FROM hero where id = ${id}`);
  }
}
