export function sayHello(name: string): string {
    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
    return `Hello ${capitalizedName}`;
}