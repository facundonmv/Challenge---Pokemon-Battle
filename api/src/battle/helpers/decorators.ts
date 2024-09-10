import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';

export function AreDifferent(property: string, validationOptions?: ValidationOptions) {
  return (object: Object, propertyName: string) => {
    registerDecorator({
      name: 'areDifferent',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [property],
      validator: {
        validate(value: any, args: ValidationArguments) {
          const [relatedPropertyName] = args.constraints;
          const relatedValue = (args.object as any)[relatedPropertyName];
          return value !== relatedValue;
        },
        defaultMessage(args: ValidationArguments) {
          return `${args.property} and ${args.constraints[0]} should not be the same.`;
        },
      },
    });
  };
}
