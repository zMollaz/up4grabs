// const { PrismaClient, Prisma } = require("@prisma/client");
// const prisma = new PrismaClient();

// const user = async () => {
//   await prisma.user.deleteMany({});
// };

// const category = async () => {
//   await prisma.categories.deleteMany({});
// };

// const listing = async () => {
//   await prisma.listings.deleteMany({});
// };

// const bidding = async () => {
//   await prisma.biddings.deleteMany({});
// };

// const like = async () => {
//   await prisma.likes.deleteMany({});
// };

// const conversation = async () => {
//   await prisma.conversation.deleteMany({});
// };

// const message = async () => {
//   await prisma.message.deleteMany({});
// };

// const cleanUp = async () => {
//   await message().catch((e) => {
//     console.error(e);
//     process.exit(1);
//   });

//   await conversation().catch((e) => {
//     console.error(e);
//     process.exit(1);
//   });

//   await like().catch((e) => {
//     console.error(e);
//     process.exit(1);
//   });

//   await bidding().catch((e) => {
//     console.error(e);
//     process.exit(1);
//   });

//   await listing().catch((e) => {
//     console.error(e);
//     process.exit(1);
//   });

//   await category().catch((e) => {
//     console.error(e);
//     process.exit(1);
//   });

//   await user().catch((e) => {
//     console.error(e);
//     process.exit(1);
//   });
// };

// cleanUp();