export default function(server) {

  // Seed your development database using your factories. This
  // data will not be loaded in your tests.

  server.createList('user', 10);
  server.createList('company', 200);
  server.createList('pet', 50);
}