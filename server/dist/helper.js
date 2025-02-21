export const formatZodError = (error) => {
    var _a;
    let errors = {};
    (_a = error.errors) === null || _a === void 0 ? void 0 : _a.map((issue) => {
        errors[issue.path[0]] = issue.message;
    });
    return errors;
};
//# sourceMappingURL=helper.js.map