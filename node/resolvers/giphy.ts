export const gif = async (
    _: any,
    { term }: { term: string },
    { clients: { giphy }}: Context
) => giphy.translate(term)