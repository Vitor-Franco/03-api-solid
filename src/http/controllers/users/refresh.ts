import { FastifyReply, FastifyRequest } from 'fastify'

export async function refresh(request: FastifyRequest, reply: FastifyReply) {
  await request.jwtVerify({
    onlyCookie: true, // só verifica o cookie, não verifica o header (setamos a configuração em app.ts)
  })

  const { sub, role } = request.user

  const token = await reply.jwtSign(
    {
      role,
    },
    {
      sign: {
        sub,
      },
    },
  )

  const refreshToken = await reply.jwtSign(
    {
      role,
    },
    {
      sign: {
        sub,
        expiresIn: '7d',
      },
    },
  )

  return reply
    .setCookie('refreshToken', refreshToken, {
      path: '/', // todo backend pode ver o cookie
      secure: true, // só envia o cookie em https
      sameSite: true, // só envia o cookie se o domínio for o mesmo
      httpOnly: true, // o cookie não pode ser acessado pelo javascript do browser
    })
    .status(200)
    .send({
      token,
    })
}
