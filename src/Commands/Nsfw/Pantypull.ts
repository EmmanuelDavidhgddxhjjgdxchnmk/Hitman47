import { BaseCommand, Command, Message } from '../../Structures'

@Command('pantypull', {
    description: 'Sends a random pantypull image',
    category: 'nsfw',
    usage: '',
    exp: 20,
    cooldown: 5
})
export default class extends BaseCommand {
    public override execute = async ({ reply }: Message): Promise<void> => {
        const { url } = await this.client.utils.fetch<{ url: string }>('https://fantox-apis.vercel.app/pantypull')
        return void (await reply(await this.client.utils.getBuffer(url), 'image'))
    }
}
