/**
 * Uma coleção de usuários falsos para serem usados como dados de placeholder.
 *
 * @typedef {Object} User
 * @property {string} id - O ID do usuário.
 * @property {string} name - O nome do usuário.
 * @property {string} email - O email do usuário.
 * @property {string} password - A senha do usuário.
 * @property {string} rule - A regra do usuário.
 *
 * @type {User[]}
 */
const users = [
  {
    id: "410544b2-4001-4271-9855-fec4b6a6442a",
    name: "User",
    email: "user@nextmail.com",
    password: "123456",
    rule: "admin",
  },
  {
    id: "",
    name: "Editor",
    email: "editor@nextmail.com",
    password: "123456",
    rule: "editor",
  },
];

export { users };
