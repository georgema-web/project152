import {database} from "../firebase";
import { ref, set } from 'firebase/database';

const db = ref(database, 'salary/');

/**
 * 
 * TODO: create a form with the appropriate entries for influencer commissions
 * 
 */
class SalaryDataService {
  getAll() {
    return db;
  }
    create(salary) {
        return set(db, salary);
  }
  delete(key) {
    return db.child(key).remove();
  }
  deleteAll() {
    return db.remove();
  }
}

export default new SalaryDataService();