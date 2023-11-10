import { PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient();
// import { faker } from '@faker-js/faker';

// * destroy records
// const destroyAllRecords = async () => {
//     // await prisma.user.deleteMany()
//     await prisma.host.deleteMany()
//     await prisma.powerHourSong.deleteMany()
//     await prisma.participant.deleteMany()
//     await prisma.invite.deleteMany()
//     // await prisma.powerHour.deleteMany()
// }

// console.log('all records destroyed', destroyAllRecords())

// let user = {
//     name: 'Alex',
//     email: 'alexbeciana@gmail.com'
// }

// console.log('creating user')
// let userObj = await prisma.user.create({
//     data: user
// })

// console.log('creating participant')
// let participantObj = await prisma.participant.create({
//     data: {
//         userId: userObj.id,
//         powerHourId: powerHourObj.id
//     }
// })
// console.log('creating host')
// await prisma.host.create({
//     data: {
//         userId: userObj.id,
//         powerHourId: powerHourObj.id
//     }
// })

// const main = async () => {
//     console.log('creating power hour')
//     let powerHourObj1 = await prisma.powerHour.create({
//         data: {
//             title: 'Power Hour 1',
//             description: 'Power Hour 1',
//             date_time: new Date('12-12-2023'),
//             cover_image: 'https://res.cloudinary.com/dymmbugh2/image/upload/v1697937069/dtn-image/g2mkvb7takf9pojc4ium.webp',
//             songLimit: 1,
//             inviteToken: 'k7MMyViZ'
//         }
//     })
//     await prisma.host.create({
//         data: {
//             userId: 2,
//             powerHourId: powerHourObj1.id
//         }
//     })
//     await prisma.participant.create({
//         data: {
//             userId: 2,
//             powerHourId: powerHourObj1.id
//         }
//     })
//     let powerHourObj2 = await prisma.powerHour.create({
//         data: {
//             title: 'Power Hour 2',
//             description: 'Power Hour 1',
//             date_time: new Date('12-12-2023'),
//             cover_image: 'https://res.cloudinary.com/dymmbugh2/image/upload/v1697937069/dtn-image/g2mkvb7takf9pojc4ium.webp',
//             songLimit: 1,
//             inviteToken: 'G7r5nDHx'
//         }
//     })
//     await prisma.host.create({
//         data: {
//             userId: 2,
//             powerHourId: powerHourObj2.id
//         }
//     })
//     await prisma.participant.create({
//         data: {
//             userId: 2,
//             powerHourId: powerHourObj2.id
//         }
//     })
//     let powerHourObj3 = await prisma.powerHour.create({
//         data: {
//             title: 'Power Hour 3',
//             description: 'Power Hour 1',
//             date_time: new Date('12-12-2023'),
//             cover_image: 'https://res.cloudinary.com/dymmbugh2/image/upload/v1697937069/dtn-image/g2mkvb7takf9pojc4ium.webp',
//             songLimit: 1,
//             inviteToken: '9trZK7Sf'
//         }
//     })
//     await prisma.host.create({
//         data: {
//             userId: 2,
//             powerHourId: powerHourObj3.id
//         }
//     })
//     await prisma.participant.create({
//         data: {
//             userId: 2,
//             powerHourId: powerHourObj3.id
//         }
//     })
//     // let songs = [
//     //     {
//     //         title: faker.music.songName(),
//     //         artist: "The Beatles",
//     //         youtubeLink: 'https://www.youtube.com/watch?v=QGnkTQikhsE',
//     //         startTime: '0:10',
//     //         endTime: '0:15',
//     //         powerHourId: 1,
//     //         orderNumber: 1,
//     //         participantId: 1
//     //     },
//     //     {
//     //         title: faker.music.songName(),
//     //         artist: "The Buggles",
//     //         youtubeLink: 'https://www.youtube.com/watch?v=W8r-tXRLazs',
//     //         startTime: '0:10',
//     //         endTime: '0:15',
//     //         powerHourId: 1,
//     //         orderNumber: 2,
//     //         participantId: 1
//     //     },
//     //     {
//     //         title: faker.music.songName(),
//     //         artist: "Brand New",
//     //         youtubeLink: 'https://www.youtube.com/watch?v=qgtkPKZ2OPk',
//     //         startTime: '0:10',
//     //         endTime: '0:15',
//     //         powerHourId: 1,
//     //         orderNumber: 3,
//     //         participantId: 1
//     //     },
//     //     {
//     //         title: faker.music.songName(),
//     //         artist: "random 1",
//     //         youtubeLink: 'https://www.youtube.com/watch?v=qgtkPKZ2OPk',
//     //         startTime: '0:10',
//     //         endTime: '0:15',
//     //         powerHourId: 1,
//     //         orderNumber: 0,
//     //         participantId: 1
//     //     },
//     //     {
//     //         title: faker.music.songName(),
//     //         artist: "random 2",
//     //         youtubeLink: 'https://www.youtube.com/watch?v=qgtkPKZ2OPk',
//     //         startTime: '0:10',
//     //         endTime: '0:15',
//     //         powerHourId: 1,
//     //         orderNumber: 0,
//     //         participantId: 1
//     //     },
//     //     {
//     //         title: faker.music.songName(),
//     //         artist: "random 3",
//     //         youtubeLink: 'https://www.youtube.com/watch?v=qgtkPKZ2OPk',
//     //         startTime: '0:10',
//     //         endTime: '0:15',
//     //         powerHourId: 1,
//     //         orderNumber: 0,
//     //         participantId: 1
//     //     }
//     // ]
//     // console.log('creating songs')
//     // for (let song of songs) {
//     //     await prisma.powerHourSong.create({
//     //         data: song
//     //     })
//     // }

//     // console.log('create invites')
//     // await prisma.invite.create({
//     //     data: {
//     //         userId: 1,
//     //         powerHourId: powerHourObj1.id
//     //     }
//     // })
//     // await prisma.invite.create({
//     //     data: {
//     //         userId: 1,
//     //         powerHourId: powerHourObj2.id
//     //     }
//     // })
//     // await prisma.invite.create({
//     //     data: {
//     //         userId: 1,
//     //         powerHourId: powerHourObj3.id
//     //     }
//     // })
// }

// main()
// .then(async () => {
//     await prisma.$disconnect()
// })
// .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
// })