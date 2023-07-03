import { BaseCommand, Command, Message } from '../../Structures'

@Command('underwear', {
    description: 'Sends a underwer nsfw image',
    category: 'nsfw',
    usage: '',
    exp: 20,
    cooldown: 3
})
export default class extends BaseCommand {
    public override execute = async ({ reply }: Message): Promise<void> => {
        const { url } = await this.client.utils.fetch<{ url: string }>('https://fantox-apis.vercel.app/underwear')
        return void (await reply(await this.client.utils.getBuffer(url), 'image'))
    }
}
