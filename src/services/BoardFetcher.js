const boards =
[
    {
        lanes: [
            {
                id: 1,
                name: "Lane One",
                cards: [
                    {
                        id: 1,
                        name: "test card"
                    }
                ]
            },
            {
                id: 2,
                name: "Lane Two",
                cards: [
                    {
                        id: 2,
                        name: "other card"
                    }
                ]
            }
        ]
    }
];

const BoardFetcher = {
    fetchBoards: () => {
        return Promise.resolve(boards)
    }
};

export default BoardFetcher;