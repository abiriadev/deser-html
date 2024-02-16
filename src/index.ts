import "reflect-metadata"

export const DeserHtml = (value: any, ctx: any) => {}

export const Select =
	(query: string) => (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
		Reflect.defineMetadata("select", query, target, propertyKey)
	}
