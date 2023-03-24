import { getUserService, saveUserService } from "./../services/user.service";

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

// Save API
export async function saveUser(req, res, next) {
  try {
    const result = await saveUserService(req);
    if (result.message) {
      res.status(200).json({
        success: false,
        message: `Data can't save`,
        data: result,
      });
    }
    if (!result.message) {
      res.status(200).json({
        success: true,
        message: `Data successfully save`,
        data: result,
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Data can't save`,
      error: error.message,
    });
  }
}
