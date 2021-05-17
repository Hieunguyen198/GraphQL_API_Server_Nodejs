function feed(parent, args, context, info) {
  const where =  args.filter
  ?{
    OR:[
      {description:{contains: args.filter}},
      {url:{contains: args.filter}}
    ]
  }
  :
  {}
    const links= context.prisma.link.findMany({ 
      where,
      skip: args.skip,
      take: args.take,
      orderBy: args.orderBy,
    })
    const count =  context.prisma.link.count({where});
    return {
      links,
      count,
    }
}

function user(parent,args,context,info){
  const where = args.filter 
  ?{
    OR:[
      {name:{contains: args.filter}},
      {email:{contains: args.filter}}
    ]
  }
  :{}
  const users = context.prisma.user.findMany({where,})
  return users
}

function vote(parent,args,context,info){
  const where = args.filter
  ?{
    OR:[
      {name: {contains: args.filter}},
      {email: {contains: args.filter}}
    ]
  }:{}
  const votes= context.prisma.vote.findMany({where,})
  return votes
}

module.exports = {
    feed,
    user,
    vote,
}
