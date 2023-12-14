import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/hooks/prisma'
import { runMiddleware } from '@/middleware/corsMiddleware'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    await runMiddleware(req, res)
    if (req.method === 'PATCH') {
        if (req.body.type === 'down') {
            const reorderedSongs = await prisma.powerHour.update({
                where: {
                    id: Number(req?.query?.id)
                },
                data: {
                    PowerHourSongs: {
                        update: {
                            where: {
                                id: Number(req?.body?.trackId)
                            },
                            data: {
                                orderNumber: Number(req?.body?.destinationOrderNumber)
                            }
                        },
                        updateMany: {
                            where: {
                                NOT: {
                                    id: Number(req?.body?.trackId)
                                },
                                orderNumber: {
                                    gt: Number(req?.body?.sourceOrderNumber),
                                    lte: Number(req?.body?.destinationOrderNumber)
                                }
                            },
                            data: {
                                orderNumber: {
                                    decrement: 1
                                }
                            }
                        }
                    }
                },
                select: {
                    PowerHourSongs: {
                        where: {
                            orderNumber: {
                                gt: 0
                            }
                        },
                        orderBy: {
                            orderNumber: 'asc'
                        },
                        include: {
                            participant: {
                                select: {
                                    user: {
                                        select: {
                                            name: true
                                        }
                                    }
                                }
                            }
                        },
                    }
                }
            })
            res.status(200).json({ reorderedSongs })
        } else if (req.body.type === 'up') {
            const reorderedSongs = await prisma.powerHour.update({
                where: {
                    id: Number(req?.query?.id)
                },
                data: {
                    PowerHourSongs: {
                        update: {
                            where: {
                                id: Number(req?.body?.trackId)
                            },
                            data: {
                                orderNumber: Number(req?.body?.destinationOrderNumber)
                            }
                        },
                        updateMany: {
                            where: {
                                NOT: {
                                    id: Number(req?.body?.trackId)
                                },
                                orderNumber: {
                                    lt: Number(req?.body?.sourceOrderNumber),
                                    gte: Number(req?.body?.destinationOrderNumber)
                                }
                            },
                            data: {
                                orderNumber: {
                                    increment: 1
                                }
                            }
                        }
                    }
                },
                select: {
                    PowerHourSongs: {
                        where: {
                            orderNumber: {
                                gt: 0
                            }
                        },
                        orderBy: {
                            orderNumber: 'asc'
                        },
                        include: {
                            participant: {
                                select: {
                                    user: {
                                        select: {
                                            name: true
                                        }
                                    }
                                }
                            }
                        },
                    }
                }
            })
            res.status(200).json({ reorderedSongs })
        }
    }
}

export default handler