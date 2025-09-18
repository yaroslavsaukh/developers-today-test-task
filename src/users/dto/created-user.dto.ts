export class CreatedUserDto {
  id: number;
  uuid: string;
  email: string;
  name?: string | null;
  createdAt: Date;
}
