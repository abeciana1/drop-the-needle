import { PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient();
import { faker } from '@faker-js/faker';

// * destroy records
// const destroyAllRecords = async () => {
//     await prisma.user.deleteMany()
//     await prisma.powerHour.deleteMany()
//     await prisma.host.deleteMany()
//     await prisma.participant.deleteMany()
//     await prisma.powerHourSong.deleteMany()
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
// console.log('creating power hour')
// let powerHourObj = await prisma.powerHour.create({
//     data: {
//         title: 'Power Hour 1',
//         description: 'Power Hour 1',
//         date_time: new Date,
//         cover_image: 'https://en.wikipedia.org/wiki/Abbey_Road#/media/File:Beatles_-_Abbey_Road.jpg'
//     }
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
// let songs = [
//     {
//         title: faker.music.songName(),
//         artist: "The Beatles",
//         youtubeLink: 'https://www.youtube.com/watch?v=QGnkTQikhsE',
//         startTime: '0:10',
//         endTime: '0:15',
//         powerHourId: powerHourObj.id,
//         orderNumber: 0,
//         participantId: participantObj.id
//     },
//     {
//         title: faker.music.songName(),
//         artist: "The Buggles",
//         youtubeLink: 'https://www.youtube.com/watch?v=W8r-tXRLazs',
//         startTime: '0:10',
//         endTime: '0:15',
//         powerHourId: powerHourObj.id,
//         orderNumber: 1,
//         participantId: participantObj.id
//     },
//     {
//         title: faker.music.songName(),
//         artist: "Brand New",
//         youtubeLink: 'https://www.youtube.com/watch?v=qgtkPKZ2OPk',
//         startTime: '0:10',
//         endTime: '0:15',
//         powerHourId: powerHourObj.id,
//         orderNumber: 2,
//         participantId: participantObj.id
//     }
// ]
// console.log('creating songs')
// for (let song of songs) {
//     await prisma.powerHourSong.create({
//         data: song
//     })
// }
const main = async () => {
    console.log('create invite 1')
    await prisma.invite.create({
        data: {
            userId: 1,
            powerHourId: 1
        }
    })
    await prisma.invite.create({
        data: {
            userId: 1,
            powerHourId: 2
        }
    })
    await prisma.invite.create({
        data: {
            userId: 1,
            powerHourId: 3
        }
    })
}

main()
.then(async () => {
    await prisma.$disconnect()
})
.catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})