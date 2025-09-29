export const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const formater = new Intl.DateTimeFormat('en', { dateStyle: 'medium', timeStyle: 'short' });
    return formater.format(date);
};

export const generatePagination = (currentPage: number, totalPages: number) => {
    if (totalPages <= 5) {
        return Array.from({ length: totalPages }, (_, index) => index + 1);
    }

    if (currentPage <= 3) {
        return [1, 2, 3, 4, 5, "...", totalPages - 1, totalPages];
    }

    if (currentPage >= totalPages - 2) {
        return [1, "...", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    }

    return [
        1,
        "...",
        currentPage - 1,
        currentPage,
        currentPage + 1,
        "...",
        totalPages,
    ];
}