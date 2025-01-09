class curdService {
  constructor(repository) {
    this.repository = repository;
  }
  async create(data) {
    try {
      const result = await this.repository.create(data);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async destroy(id) {
    try {
      const response = await this.repository.destroy(id);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async get(id) {
    try {
      const result = await this.repository.get(id);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async getAll() {
    console.log("curd-service getAll is called");
    try {
      const result = await this.repository.getAll();
      return result;
    } catch (error) {
      throw error;
    }
  }
}
module.exports=curdService;
