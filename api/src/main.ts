import { NestFactory } from '@nestjs/core'
import { ValidationPipe } from '@nestjs/common'
import { json, urlencoded } from 'express'
import { AppModule } from './app.module'

/**
 * This function initializes the NestJS application, sets up global pipes and prefixes, enables CORS,
 * configures body parsers, sets up Swagger documentation, and starts listening on the specified port.
 */
async function bootstrap() {
  // Create the NestJS application
  const app = await NestFactory.create(AppModule)

  // Set up global pipes for request validation
  app.useGlobalPipes(
    new ValidationPipe({
      forbidUnknownValues: false,
      stopAtFirstError: true,
      validationError: { target: false },
      transform: true,
    }),
  )

  // Set the global prefix for all routes
  app.setGlobalPrefix(process.env.SERVICE_PREFIX)

  // Enable Cross-Origin Resource Sharing (CORS)
  app.enableCors({
    origin: '*', // Reemplaza con el origen permitido
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true, // Si necesitas enviar cookies o autenticación
    allowedHeaders: 'Content-Type, Authorization', // Especifica qué cabeceras permites
  })
    // Configure body parsers for handling JSON and URL encoded data
  app.use(json({ limit: '5mb' }))
  app.use(urlencoded({ extended: true, limit: '5mb' }))


  // Start listening on the specified port
  await app.listen(process.env.PORT)

  // Log the port where the application is listening
  console.log(`App listen in port ${process.env.PORT}`)
}
bootstrap()
