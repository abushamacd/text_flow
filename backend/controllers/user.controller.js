import { getUserService } from "./../services/user.service";

// Get API
export async function getUser(req, res, next) {
  try {
    //   const queryData = req.query;
    const result = await getUserService();

    res.status(200).json({
      success: true,
      message: `Data get successfully`,
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Data can't get`,
      error: error.message,
    });
  }
}
