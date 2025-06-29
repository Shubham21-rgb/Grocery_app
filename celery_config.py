import os

broker_url = os.environ.get("REDIS_URL", "redis://localhost:6379/0")
result_backend = os.environ.get("RESULT_BACKEND", broker_url)

timezone = os.environ.get("CELERY_TIMEZONE", "Asia/Kolkata")
broker_connection_retry_on_startup = True

accept_content = ['json']
task_serializer = 'json'
result_serializer = 'json'