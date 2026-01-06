import { supabase } from '../config/connection.js';

class UsersDal {
  constructor(username, password) {
    (this.username = username), (this.password = password);
  }
  async add() {
    await supabase.from('Users').insert({
      username: this.username,
      password: this.password,
    });
  }
  async find() {
    const { data: user } = await supabase
      .from('Users')
      .select()
      .eq('username', this.username);
    return user;
  }
}
