import { prisma } from '@repo/prisma/client'



export default async function Home() {
  const user = await prisma.user.findFirst();
  return <div>
    <h1>Hello User</h1>
    <div>
      username : {user?.username}
    </div>
    <div>
      password : {user?.password}
    </div>
  </div>
}
