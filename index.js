function superbowlWin(record) {
    const winRecord = record.find(record => record.result === "W");
    return winRecord ? winRecord.year : undefined;
}