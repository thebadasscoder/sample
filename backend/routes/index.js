const router = express.Router();

router.use('/article', require('./article-router'));

module.exports = router;

